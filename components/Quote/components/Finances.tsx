import React from "react";
import numeral from "numeral";
import SectionHeader from "./SectionHeader";
import { GetQuoteQuery } from "../../../api/jambo";

const Finances = ({ data }: { data: GetQuoteQuery }) => (
  <section id="finance" className="container section">
    <SectionHeader
      title="Finances"
      subtitle={`all prices listed in ${data.quote?.baseCurrency}`}
    />
    {data.quote?.status === 2 && (
      <p>
        This quotation has expired. Please contact your travel consultant for an
        update.
      </p>
    )}
    {data.quote?.status !== 2 && (
      <div className="columns">
        <div className="column is-narrow">
          <p className="heading">Total</p>
          <p className="title">
            {numeral(data.quote?.total).format("$0,0.00")}
          </p>
        </div>
        {(data.quote?.travellerCount ?? 1) <= 1 ? null : (
          <>
            <div className="column is-narrow">
              <p className="heading">Group size</p>
              <p className="title">{data.quote?.travellerCount}</p>
            </div>
            <div className="column is-narrow">
              <p className="heading">Per person</p>
              <p className="title">
                {numeral(
                  data.quote?.total / (data.quote?.travellerCount ?? 1)
                ).format("$0,0.00")}
              </p>
            </div>
          </>
        )}
      </div>
    )}
  </section>
);

export default Finances;
