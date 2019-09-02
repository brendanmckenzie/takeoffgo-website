import React from "react";
import numeral from "numeral";
import moment from "moment";
import SectionHeader from "./SectionHeader";

const Finances = ({ data }: any) => (
  <React.Fragment>
    <a id="finance" />
    <section className="section">
      <SectionHeader
        title="Finances"
        subtitle={`all prices listed in ${data.currency}`}
      />
      {data.status === "Expired" && (
        <p>
          This quotation has expired. Please contact your travel consultant for
          an update.
        </p>
      )}
      {data.status !== "Expired" && (
        <div className="columns">
          <div className="column">
            <p className="heading">Total</p>
            <p className="title">{numeral(data.total).format("$0,0.00")}</p>
          </div>
          <div className="column">
            <p className="heading">Group size</p>
            <p className="title">{data.groupSize}</p>
          </div>
          <div className="column">
            <p className="heading">Per person</p>
            <p className="title">
              {numeral(data.total / data.groupSize).format("$0,0.00")}
            </p>
          </div>
          {data.nextPayment ? (
            <React.Fragment>
              <div className="column">
                <p className="heading">{data.nextPayment.type}</p>
                <p className="title">
                  {numeral(data.nextPayment.amount).format("$0,0.00")}
                </p>
                <p className="subtitle">
                  due {moment(data.nextPayment.due).format("MMMM D, YYYY")}
                </p>
                {data.nextPayment.url && (
                  <p>
                    <a
                      className="button is-link"
                      target="_blank"
                      href={data.nextPayment.url}
                    >
                      Pay here
                    </a>
                  </p>
                )}
              </div>
              {data.totalOutstanding > data.nextPayment.amount && (
                <div className="column">
                  <p className="heading">Currently Outstanding</p>
                  <p className="title">
                    {numeral(data.totalOutstanding).format("$0,0.00")}
                  </p>
                </div>
              )}
            </React.Fragment>
          ) : (
            <div className="column">
              <p className="heading">Next payment</p>
              <p className="title">All paid!</p>
            </div>
          )}
        </div>
      )}
    </section>
  </React.Fragment>
);

export default Finances;
