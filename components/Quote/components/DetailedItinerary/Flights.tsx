import React from "react";
import moment, { Moment } from "moment";
import _ from "lodash";
import { dateFormat, timeFormat, timeFormatExt } from "../../global/constants";
import { TripFlight, Airport } from "../../../../lib/graphql";

export type FlightDetail = TripFlight & {
  departureDate: Moment;
  departureAirport: Airport;
  arrivalAirport: Airport;
};

type Props = {
  flights: FlightDetail[];
  includeDate?: boolean;
  referenceDate?: Moment;
};

const Flights: React.FC<Props> = ({ flights, includeDate, referenceDate }) =>
  flights.length > 0 ? (
    <React.Fragment>
      {_(flights)
        .groupBy(ent => moment(ent.departure).format("YYYY-MM-DD"))
        .toPairs()
        .map(([date, list]) => (
          <div key={date} className="columns">
            {includeDate && (
              <div className="column is-2">
                {moment(date).format(dateFormat)}
              </div>
            )}
            <div className="column">
              <article className="message">
                <div className="message-body">
                  {list.map(flight => {
                    const { departureAirport, arrivalAirport } = flight;

                    if (!arrivalAirport || !departureAirport) {
                      return null;
                    }

                    const sameDay = moment(flight.departure).isSame(
                      flight.arrival,
                      "day"
                    );

                    return (
                      <React.Fragment key={flight.id}>
                        {referenceDate &&
                          !referenceDate.isSame(
                            moment.utc(moment(flight.departure)),
                            "day"
                          ) && (
                            <p className="heading">
                              {moment(flight.departure).format(dateFormat)}
                            </p>
                          )}

                        <div className="columns is-vcentered">
                          <div className="column is-2">
                            <ul className="columns is-vcentered is-mobile">
                              <li className="column is-narrow">
                                <i className="fad fa-2x fa-plane-departure" />
                              </li>
                              <li className="column">
                                <code className="is-flight-number">
                                  <span>{flight.carrier}</span>
                                  <span>{flight.number}</span>
                                </code>
                              </li>
                            </ul>
                          </div>
                          <div className="column">
                            <ul className="inline reset-mobile">
                              <li>
                                <strong>Departing</strong>
                              </li>
                              <li>
                                {[
                                  departureAirport.city,
                                  departureAirport.country?.name
                                ].join(", ")}
                              </li>
                              <li>
                                {moment(flight.departure).format(timeFormat)}
                              </li>
                            </ul>
                            <ul className="inline reset-mobile">
                              <li>
                                <strong>Arriving</strong>
                              </li>
                              <li>
                                {[
                                  arrivalAirport.city,
                                  arrivalAirport.country?.name
                                ].join(", ")}
                              </li>
                              <li>
                                {moment(flight.arrival).format(
                                  sameDay ? timeFormat : timeFormatExt
                                )}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </article>
            </div>
          </div>
        ))
        .value()}
    </React.Fragment>
  ) : null;

export default Flights;
