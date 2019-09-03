import React from "react";
import numeral from "numeral";

export const moneyFormat = "$0,0.00";

const LineItems = ({ data }) => (
  <table className="table is-narrow is-striped is-fullwidth">
    <thead>
      <tr>
        <th />
        <th style={{ width: 80 }}>Quantity</th>
        <th style={{ width: 160 }}>Rate</th>
        <th style={{ width: 160 }}>Amount</th>
      </tr>
    </thead>
    <tbody>
      {data.items.map(ent => (
        <tr key={ent.id}>
          <td>{ent.description}</td>
          <td className="has-text-right">
            <code>{ent.quantity}</code>
          </td>
          <td className="has-text-right">
            <code>
              {numeral(ent.amount).format(moneyFormat)} {ent.currency}
            </code>
          </td>
          <td className="has-text-right">
            <code>
              {numeral(ent.total).format(moneyFormat)} {ent.currency}
            </code>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LineItems;
