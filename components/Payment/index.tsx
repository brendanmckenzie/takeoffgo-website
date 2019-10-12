import React, { FormEvent, ChangeEvent } from "react";
import numeral from "numeral";
import Markdown from "react-markdown";
import Field from "./Field";
import { css } from "../../lib/util";
import { PublicInvoice } from "../../lib/models/types";
import { BrandLine } from "../Bulma";
import gql from "graphql-tag";
import initApollo from "../../lib/init-apollo";
import { ApolloClient } from "apollo-boost";

const stripeConfig = {
  live: {
    publicKey: "pk_live_5DIChTOisCE5BE00zAxhagIX"
  },
  test: {
    publicKey: "pk_test_bSdrqcnKSDNxExRP0B5ErFbt"
  }
};

type PaymentProps = {
  model: {
    invoice: PublicInvoice;
    amount?: number;
  };
};

class Payment extends React.Component<PaymentProps> {
  state = {
    loading: false,
    paid: false,
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    error: null as any
  };

  validate() {
    const error = [];
    if (!this.state.name) {
      error.push("Please enter your name.");
    }

    if (!this.state.number) {
      error.push("Please enter your card number.");
    }

    if (!this.state.expiry) {
      error.push("Please enter your card expiry date.");
    }

    if (this.state.expiry && this.state.expiry.indexOf("/") === -1) {
      error.push("Please enter your card expiry date in the format MM/YY.");
    }

    if (!this.state.cvc) {
      error.push("Please enter your credit card verification number (CVV).");
    }

    if (error.length > 0) {
      this.setState({ error });
    }

    return error.length === 0;
  }

  handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!this.validate()) {
      return;
    }

    this.setState({ loading: true, error: null });

    const data: any = {
      "card[name]": this.state.name,
      "card[number]": this.state.number,
      "card[exp_month]": this.state.expiry.split("/")[0],
      "card[exp_year]": `20${this.state.expiry.split("/")[1]}`,
      "card[cvc]": this.state.cvc
    };

    const request = {
      headers: {
        Authorization: `Bearer ${stripeConfig.test.publicKey}`,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
      method: "POST",
      body: Object.keys(data)
        .map(key => `${key}=${encodeURIComponent(data[key])}`)
        .join("&")
    };

    const {
      model: { amount, invoice }
    } = this.props;

    const handleErrors = (res: any) => {
      if (res.ok) {
        return res;
      } else {
        return res.json().then((err: any) => {
          throw new Error(err.message);
        });
      }
    };

    const apollo = initApollo({}) as ApolloClient<{}>;
    fetch("https://api.stripe.com/v1/tokens", request)
      .then(handleErrors)
      .then(res => res.json())
      .then(res =>
        apollo.query({
          query: gql`
            query invoicePayment(
              $invoice: ID!
              $token: String!
              $amount: Decimal
            ) {
              invoicePayment(
                invoice: $invoice
                token: $token
                amount: $amount
              ) {
                success
              }
            }
          `,
          variables: {
            invoice: invoice.id,
            token: res.id,
            amount
          }
        })
      )
      .then(() => {
        this.setState({
          loading: true,
          paid: true
        });
      })
      .catch(ex => {
        this.setState({
          loading: false,
          error: ex.error
            ? ex.error.message
            : "An error occurred processing your payment"
        });
      });
  };

  handleChange = (field: string) => (ev: ChangeEvent<HTMLInputElement>) =>
    this.setState({ [field]: ev.target.value });

  get success() {
    return <p>Your payment has been accepted.</p>;
  }

  get error() {
    if (!this.state.error) {
      return null;
    }

    return (
      <div className="message is-warning is-small">
        <div className="message-header">Payment processing issue</div>
        <div className="message-body">
          {typeof this.state.error === "string" ? (
            <p>{this.state.error}</p>
          ) : (
            <ul>
              {this.state.error.map((err: any, idx: number) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  get form() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          name="name"
          label="Name on credit card"
          autoFocus
          value={this.state.name}
          onChange={this.handleChange("name")}
          disabled={this.state.loading}
        />
        <Field
          name="number"
          label="Card number"
          placeholder="•••• •••• •••• ••••"
          value={this.state.number}
          onChange={this.handleChange("number")}
          disabled={this.state.loading}
        />
        <div className="columns">
          <div className="column">
            <Field
              name="expiry"
              label="Expiry"
              placeholder="MM/YY"
              value={this.state.expiry}
              onChange={this.handleChange("expiry")}
              disabled={this.state.loading}
            />
          </div>
          <div className="column">
            <Field
              name="cvv2"
              label="CVV"
              placeholder="•••"
              value={this.state.cvc}
              onChange={this.handleChange("cvc")}
              disabled={this.state.loading}
            />
          </div>
        </div>
        <div className="content is-small">
          <p>
            By submitting payment, you are agreeing to our{" "}
            <a href="/terms-and-conditions" target="_blank">
              terms and conditions
            </a>
          </p>
        </div>
        {this.error}
        <div className="buttons is-centered are-large">
          <button
            type="submit"
            className={css({
              button: true,
              "is-primary": true,
              "is-loading": this.state.loading
            })}
          >
            Submit
          </button>
        </div>
        <BrandLine />
        <div className="content is-small">
          <span className="heading">Security</span>
          <p>
            We work with our friends at Stripe to handle your sensitive
            information in the most secure way possible.{" "}
            <a href="https://stripe.com/docs/security/stripe" target="_blank">
              Read more here
            </a>{" "}
            about how Stripe handle your information securely.
          </p>
        </div>
      </form>
    );
  }

  get input() {
    const {
      model: { invoice }
    } = this.props;

    if (!invoice) {
      return (
        <div className="content">
          <p>This invoice cannot be found.</p>
          <p>Please contact your Take Off Go representative.</p>
        </div>
      );
    }

    if (invoice.paid) {
      return (
        <div className="content">
          <p>This invoice has already been paid. Thank you.</p>
        </div>
      );
    }

    if (this.state.paid) {
      return this.success;
    }

    return this.form;
  }

  render() {
    const {
      model: { invoice, amount }
    } = this.props;

    return (
      <>
        <div className="section payment">
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="has-text-centered">
                <img className="logo" src="/static/logo-square.png" />
                <h1 className="title is-1">Payment</h1>
                {invoice.amountDue > 0 && (
                  <h4 className="subtitle is-4">
                    {numeral(amount || invoice.amountDue).format("$0,00.00")}{" "}
                    {invoice.currency}
                  </h4>
                )}
                {invoice.amountDue > 0 && amount ? (
                  <h6 className="subtitle is-6">
                    Invoice total {numeral(invoice.total).format("$0,00.00")}{" "}
                    with {numeral(invoice.amountDue).format("$0,00.00")}{" "}
                    outstanding
                  </h6>
                ) : null}
                {invoice.items &&
                  invoice.items.map(
                    ent =>
                      ent && (
                        <Markdown
                          key={ent.id}
                          className="content"
                          source={ent.description}
                        />
                      )
                  )}
              </div>
              <BrandLine />
              {this.input}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Payment;
