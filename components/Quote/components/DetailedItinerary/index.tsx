import React from "react";
import moment from "moment";
import Markdown from "react-markdown";

import SectionHeader from "../SectionHeader";
import { dateFormat } from "../../global/constants";
import { toSentence, extractSortedFlights } from "../../global/helpers";
import Flights from "./Flights";

const DetailedItinerary = ({ data }: any) => {
  const flights = extractSortedFlights(data);
  const flightsPrior =
    data.days.length === 0
      ? []
      : flights.filter((flight: any) =>
          flight.departureDate
            .utc()
            .isBefore(moment.utc(data.days[0].date), "day")
        );
  const flightsAfter = flights.filter((flight: any) =>
    flight.departureDate
      .utc()
      .isAfter(
        moment.utc(
          data.days.length === 0 ? [] : data.days[data.days.length - 1].date
        ),
        "day"
      )
  );

  return (
    <React.Fragment>
      <section
        id="detailed-itinerary"
        className="section container is-page-break"
      >
        <SectionHeader title="Itinerary" />
        <Flights includeDate flights={flightsPrior} data={data} />
        {flightsPrior.length > 0 && (
          <div className="has-text-centered">
            <hr />
            <strong>TAKE OFF GO SERVICES COMMENCE</strong>
            <hr />
          </div>
        )}
        {data.days.map((day: any, index: number, array: any[]) => {
          const combinedDayCount = array.filter(
            (v, i, arr) =>
              i > index && // is after this current day
              v.accommodation === day.accommodation && // has the same accommodation
              arr[i - 1].accommodation === v.accommodation && // has the same accommodation as the previous entry - to avoid clashes if the same accommodation appears twice
              (arr[i - 1].activities.detail === v.activities.detail ||
                !v.activities.detail ||
                !arr[i - 1].activities.detail) // has the same (or no) description
          ).length;

          const timeSpan = {
            start: moment.utc(day.date).startOf("day"),
            end: moment
              .utc(day.date)
              .add(combinedDayCount, "day")
              .endOf("day")
          };

          const accom = data.accommodation.find(
            (a: any) => a.id === day.accommodation
          );
          const property = accom
            ? data.properties.find((p: any) => p.id === accom.property)
            : null;
          const destinations = day.destinations.map((id: any) =>
            data.destinations.find((d: any) => d.id === id)
          );
          const finalHr = index + 1 !== array.length && (
            <hr className="is-hidden-print" />
          );
          const matchingFlights = flights.filter((flight: any) =>
            flight.departureDate.utc().isBetween(timeSpan.start, timeSpan.end)
          );
          const skip =
            index > 0 &&
            day.accommodation === array[index - 1].accommodation &&
            (day.activities.detail === array[index - 1].activities.detail ||
              !array[index - 1].activities.detail ||
              !day.activities.detail);

          if (skip) {
            return null;
          }

          const dayDisplay =
            combinedDayCount === 0 ? (
              <strong>Day {day.index + 1}</strong>
            ) : (
              [
                <strong key={`${day.index + 1}.0`}>
                  Days {day.index + 1}
                </strong>,
                <span key={`${day.index + 1}.1`}> &ndash; </span>,
                <strong key={`${day.index + 1}.2`}>
                  {day.index + combinedDayCount + 1}
                </strong>
              ]
            );

          return (
            <React.Fragment key={day.index}>
              <a id={`day-${day.index}`} />
              <div className="columns avoid-page-break">
                <div className="column is-2">
                  <ul>
                    <li>{dayDisplay}</li>
                    <li>{moment(day.date).format(dateFormat)}</li>
                    {combinedDayCount > 0 && (
                      <li>
                        <small>
                          to{" "}
                          {moment(day.date)
                            .add(combinedDayCount, "day")
                            .format(dateFormat)}
                        </small>
                      </li>
                    )}
                    {destinations.length > 0 && (
                      <li>
                        <small>
                          {destinations
                            .map((d: any) => d.name)
                            .reduce((p: any, c: any) => [p, " to ", c])}
                        </small>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="column is-2 is-hidden-tablet">
                  {day.activities.summary && (
                    <ul>
                      {day.activities.summary
                        .split("\n")
                        .map((text: string, index: number) => (
                          <li key={index}>{text}</li>
                        ))}
                    </ul>
                  )}
                </div>
                <div className="column">
                  <Flights
                    flights={matchingFlights}
                    data={data}
                    referenceDate={moment.utc(day.date)}
                  />
                  <Markdown
                    className="content"
                    source={day.activities.detail}
                  />
                  {property && (
                    <div className="level">
                      <div className="level-left">
                        <strong className="level-item">Accommodation</strong>
                        <a
                          className="level-item"
                          href={`#property-${property.id}`}
                        >
                          {property.name}
                        </a>
                        {accom.room && (
                          <span className="level-item">{accom.room}</span>
                        )}
                        {accom.inclusions.food.length > 0 && (
                          <span className="level-item is-hidden-print">
                            {toSentence(accom.inclusions.food)} included
                          </span>
                        )}
                        {accom.inclusions.beverage.length > 0 && (
                          <span className="level-item is-hidden-print">
                            {toSentence(accom.inclusions.beverage)} beverages
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {/* <div className="column is-2">pictures here</div> */}
              </div>
              {finalHr}
            </React.Fragment>
          );
        })}
        {flightsAfter.length > 0 && (
          <div className="has-text-centered">
            <hr />
            <strong>TAKE OFF GO SERVICES CONCLUDE</strong>
            <hr />
          </div>
        )}
        <Flights includeDate flights={flightsAfter} data={data} />
      </section>
    </React.Fragment>
  );
};

export default DetailedItinerary;
