import React from "react";
import moment from "moment";
import { InvoiceComponentProps } from "../index.d";
import { dateFormatWithYear } from "../../../lib/constants";

const Summary: React.FC<InvoiceComponentProps> = ({ data }) => (
  <div className="columns">
    <div className="column">
      <h1 className="title is-1">Invoice #{data.number}</h1>
      {data.subtitle && <h3 className="subtitle is-3">{data.subtitle}</h3>}
    </div>
    <div className="column is-narrow">
      <table className="table is-narrow">
        <tbody>
          <tr>
            <th>Invoiced</th>
            <td className="has-text-right">
              {moment(data.invoiced).format(dateFormatWithYear)}
            </td>
          </tr>
          <tr>
            <th>Due</th>
            <td className="has-text-right">
              {moment(data.due).format(dateFormatWithYear)}
            </td>
          </tr>
          {data.paid && (
            <tr>
              <th>Paid</th>
              <td className="has-text-right">
                {moment(data.paid).format(dateFormatWithYear)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default Summary;
