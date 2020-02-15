import React from "react";
import numeral from "numeral";
import { moneyFormat } from "../../../lib/constants";
import { InvoicePublic } from "../../../lib/graphql";

const Total: React.FC<{ data: InvoicePublic }> = ({ data }) => (
  <div className="columns">
    <div className="column" />
    <div className="column is-narrow block is-emphasised-left">
      <span className="heading">Total amount due</span>
      <h1 className="title is-3">
        <code>
          {numeral(data.amount).format(moneyFormat)} {data.currency}
        </code>
      </h1>
    </div>
  </div>
);

export default Total;
