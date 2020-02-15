import React from "react";
import moment from "moment";
import pluralize from "pluralize";
import { GetQuoteQuery } from "../../../lib/graphql";

const Summary = ({ data }: { data: GetQuoteQuery }) => (
  <section className="section container">
    <div id="summary" className="columns">
      <div className="column is-2">
        <p className="heading">Starting</p>
        <p className="title">
          {moment(data?.quote?.start || "").format("MMM Do, YYYY")}
        </p>
        {moment(data?.quote?.start || "").isAfter(moment()) && (
          <p className="subtitle is-hidden-print">
            {moment(data?.quote?.start || "").fromNow()}
          </p>
        )}
      </div>
      <div className="column is-2">
        <p className="heading">Duration</p>
        <p className="title">
          {pluralize("day", (data.quote?.duration ?? 0) + 1, true)}
        </p>
        <p className="subtitle">
          {pluralize("night", data.quote?.duration ?? 0, true)}
        </p>
      </div>
      <div className="column is-2">
        <p className="heading">Group size</p>
        <p className="title">{data.quote?.travellerCount}</p>
      </div>
    </div>
  </section>
);

export default Summary;
