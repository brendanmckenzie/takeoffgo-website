import React from "react";
import numeral from "numeral";
import Markdown from "react-markdown";
import { BrandLine } from "../Bulma";
import { InvoicePublic, usePayInvoiceMutation } from "../../api/jambo";
import { stripeToken } from "./stripe";
import { Input } from "./components/Input";

type PaymentProps = {
  model: {
    invoice: InvoicePublic;
    amount?: number;
    customer?: string;
  };
};

const fallbackError = "An error occurred processing your payment";

const validate = (state: any, setState: (state: any) => void) => {
  const error: string[] = [];
  if (!state.name) {
    error.push("Please enter your name.");
  }

  if (!state.number) {
    error.push("Please enter your card number.");
  }

  if (!state.expiry) {
    error.push("Please enter your card expiry date.");
  }

  if (state.expiry && state.expiry.indexOf("/") === -1) {
    error.push("Please enter your card expiry date in the format MM/YY.");
  }

  if (!state.cvc) {
    error.push("Please enter your credit card verification number (CVV).");
  }

  if (error.length > 0) {
    setState({ error });
  }

  return error.length === 0;
};

const Payment: React.FC<PaymentProps> = ({ model: { invoice, amount } }) => {
  const [payment, paymentStatus] = usePayInvoiceMutation();

  const [state, setState] = React.useState({
    loading: false,
    paid: false,
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    error: null as any,
  });

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!validate(state, setState)) {
      return;
    }

    setState({ ...state, error: null, loading: true });
    try {
      const token = await stripeToken(state);

      const variables = {
        invoice: invoice.id,
        token,
        amount,
      };

      const res = await payment({ variables });

      if (res.data?.executePayment?.success) {
        setState({
          ...state,
          paid: true,
        });
      } else {
        setState({
          ...state,
          paid: false,
          loading: false,
          error: res.data?.executePayment?.message ?? fallbackError,
        });
      }
    } catch (ex) {
      setState({
        ...state,
        loading: false,
        error: ex.error ? ex.error.message : fallbackError,
      });
    }
  };

  return (
    <>
      <h1 className="title is-1">Payment</h1>
      {invoice.amountDue > 0 && (
        <h4 className="subtitle is-4">
          {numeral(amount || invoice.amountDue).format("$0,00.00")}{" "}
          {invoice.currency}
        </h4>
      )}
      {invoice.amountDue > 0 && amount ? (
        <h6 className="subtitle is-6">
          {invoice.amount === invoice.amountDue ? (
            <>Invoice total {numeral(invoice.amount).format("$0,00.00")}</>
          ) : (
            <>
              Invoice total {numeral(invoice.amount).format("$0,00.00")} with{" "}
              {numeral(invoice.amountDue).format("$0,00.00")} outstanding
            </>
          )}
        </h6>
      ) : null}

      {invoice.summary && (
        <Markdown className="content">{invoice.summary}</Markdown>
      )}
      <BrandLine />
      <Input
        invoice={invoice}
        loading={paymentStatus.loading || state.loading}
        onChange={(f, v) => setState({ ...state, [f]: v })}
        onSubmit={handleSubmit}
        paid={state.paid}
        value={state}
      />
    </>
  );
};

export default Payment;
