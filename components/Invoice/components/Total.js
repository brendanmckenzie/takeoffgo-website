import React from "react";
import numeral from "numeral";

export const moneyFormat = "$0,0.00";

const Total = ({ data }) => (
  <div className="columns">
    <div className="column" />
    <div className="column is-narrow block-emphasise-left">
      <span className="heading">Total amount due</span>
      <h1 className="title is-1">
        <code>
          {numeral(data.total).format(moneyFormat)} {data.currency}
        </code>
      </h1>
    </div>
  </div>
);

export default Total;
