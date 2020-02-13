import React from "react";
import Markdown from "react-markdown";
import moment from "moment";
import numeral from "numeral";
import SectionHeader from "./SectionHeader";

const Terms = ({ data }: any) => (
  <section id="terms" className="section container">
    <SectionHeader title="Terms and conditions" />
    <div className="columns">
      {data.inclusions && (
        <div className="column">
          <span className="heading">Inclusions</span>
          <Markdown source={data.inclusions} className="content" />
        </div>
      )}
      {data.exclusions && (
        <div className="column">
          <span className="heading">Exclusions</span>
          <Markdown source={data.exclusions} className="content" />
        </div>
      )}
      <div className="column">
        <span className="heading">Terms</span>
        <div className="content">
          <ol type="a">
            {data.status !== "Confirmed" && (
              <li>
                This price is valid until midnight{" "}
                {moment(data.expiry).format("D MMM YYYY")}.
              </li>
            )}
            <li>
              The price listed here is total for {data.groupSize} travellers
              based on {data.groupSize === 1 ? "single" : "double"} room
              occupancy (
              {numeral(data.total / data.groupSize).format("$0,0.00")}{" "}
              {data.currency} per person).
            </li>
            {data.nextInvoice && (
              <React.Fragment>
                <li>
                  Your deposit is due immediately on booking (30% of program
                  price, minimum $500 {data.currency}).
                </li>
                <li>The balance is due 90 days prior to departure.</li>
              </React.Fragment>
            )}
            <li>
              Cancellations of confirmed bookings 90 days or more prior to
              departure will receive full refund minus a $500 {data.currency}{" "}
              (per person) administrative fee and any non refundable paid fees
              (such as non refundable airfare, cruise or hotel deposits). 60-89
              days will be subject to loss of 30% of program price. 30-59 days
              will be subject to loss of 50% of program price. 29 days or less
              will be subject to loss of 100% of program price.
            </li>
            <li>
              Tour quotes do not include airfare to/from the trip start point
              unless noted on the itinerary.
            </li>
            <li>
              Cost increases in currency exchange, government fees, taxes,
              surcharges or hotel/lodge tariff increases between quote date and
              start date may be payable by the client.
            </li>
            <li>
              Availability cannot be guaranteed until booked. We will exercise
              best efforts to book hotels per the itinerary, however, in busy
              seasons and with client bookings made within 90 days of tour date
              we may be forced to offer substitutes
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default Terms;
