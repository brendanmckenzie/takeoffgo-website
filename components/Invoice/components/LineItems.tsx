import React from "react";
import numeral from "numeral";
import { moneyFormat } from "../../../lib/constants";
import { InvoicePublic } from "../../../lib/graphql";

const LineItems: React.FC<{ data: InvoicePublic }> = ({ data }) => (
  <table className="table is-narrow is-striped is-fullwidth">
    <thead>
      <tr>
        <th />
        <th className="has-text-right" style={{ width: 80 }}>
          Quantity
        </th>
        <th className="has-text-right" style={{ width: 160 }}>
          Rate
        </th>
        <th className="has-text-right" style={{ width: 160 }}>
          Amount
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <small>{data.summary}</small>
        </td>
        <td className="has-text-right">
          <code>1</code>
        </td>
        <td className="has-text-right">
          <code>
            {numeral(data.amount).format(moneyFormat)} {data.currency}
          </code>
        </td>
        <td className="has-text-right">
          <code>
            {numeral(data.amount).format(moneyFormat)} {data.currency}
          </code>
        </td>
      </tr>
    </tbody>
  </table>
);

export default LineItems;
