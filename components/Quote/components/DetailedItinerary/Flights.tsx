import React from "react";
import moment from "moment";
import _ from "lodash";
import { dateFormat, timeFormat, timeFormatExt } from "../../global/constants";

const Flights = ({ flights, data, includeDate, referenceDate }: any) =>
  flights.length > 0 ? (
    <React.Fragment>
      {_(flights)
        .groupBy((ent: any) => moment(ent.departure.date).format("YYYY-MM-DD"))
        .toPairs()
        .map(([date, list]: any[]) => (
          <div key={date} className="columns">
            {includeDate && (
              <div className="column is-2">
                {moment(date).format(dateFormat)}
              </div>
            )}
            <div className="column">
              <article className="message">
                <div className="message-body">
                  {list.map((flight: any) => {
                    const departureAirport = data.airports.find(
                      (a: any) =>
                        a.iata === flight.departure.airport ||
                        a.icao === flight.departure.airport
                    );
                    const arrivalAirport = data.airports.find(
                      (a: any) =>
                        a.iata === flight.arrival.airport ||
                        a.icao === flight.departure.airport
                    );
                    if (!arrivalAirport || !departureAirport) {
                      return null;
                    }

                    const sameDay = moment(flight.departure.date).isSame(
                      flight.arrival.date,
                      "day"
                    );

                    return (
                      <React.Fragment key={flight.id}>
                        {referenceDate &&
                          !referenceDate.isSame(
                            moment.utc(flight.departure.date),
                            "day"
                          ) && (
                            <p className="heading">
                              {moment(flight.departure.date).format(dateFormat)}
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
                                  departureAirport.country
                                ].join(", ")}
                              </li>
                              <li>
                                {moment(flight.departure.date).format(
                                  timeFormat
                                )}
                              </li>
                            </ul>
                            <ul className="inline reset-mobile">
                              <li>
                                <strong>Arriving</strong>
                              </li>
                              <li>
                                {[
                                  arrivalAirport.city,
                                  arrivalAirport.country
                                ].join(", ")}
                              </li>
                              <li>
                                {moment(flight.arrival.date).format(
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
