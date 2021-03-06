import React from "react";
import { InvoicePublic } from "../../../api/jambo";

const PaymentOptions: React.FC<{ data: InvoicePublic }> = ({ data }) => (
  <div className="section is-emphasised">
    <h2 className="subtitle is-5">Payment options</h2>
    <div className="columns is-variable is-vcentered is-1">
      <div className="column is-narrow">
        <span className="icon is-medium">
          <i className="fal fa-lg fa-globe-africa" />
        </span>
      </div>
      <div className="column">
        <p className="is-hidden-print">
          <a target="_blank" href={`/payment?id=${data.id}`}>
            <strong>Online payment form</strong>
          </a>{" "}
          follow this link to make payment using our secure online payment form
        </p>
        <p className="is-only-print">
          <strong>Online payment form</strong> ask your travel consultant for
          the link to make payment
        </p>
      </div>
    </div>

    <div className="columns is-variable is-vcentered is-1">
      <div className="column is-narrow">
        <span className="icon is-medium">
          <i className="fal fa-lg fa-user" />
        </span>
      </div>
      <div className="column">
        <p>
          <strong>In person</strong> contact your travel consultant to arrange
          payment
        </p>
      </div>
    </div>

    <div className="columns is-variable is-vcentered is-1">
      <div className="column is-narrow">
        <span className="icon is-medium">
          <i className="fal fa-lg fa-university" />
        </span>
      </div>
      <div className="column">
        <p>
          <strong>Bank transfer</strong> we bank with{" "}
          <code className="strong">NAB</code> our BSB is{" "}
          <code className="strong">083-004</code> account number{" "}
          <code className="strong">88-123-1326</code> in the name{" "}
          <code className="strong">Take Off Go Pty Ltd</code> please include the
          reference <code className="strong">Invoice {data.number}</code> when
          making payment
        </p>
      </div>
    </div>
  </div>
);

export default PaymentOptions;
