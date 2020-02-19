import React from "react";
import moment from "moment";
import Markdown from "react-markdown";

import SectionHeader from "../SectionHeader";
import { dateFormat } from "../../global/constants";
import { toSentence, extractSortedFlights } from "../../global/helpers";
import Flights, { FlightDetail } from "./Flights";
import { GetQuoteQuery } from "../../../../lib/graphql";
import { useRouter } from "next/router";

const DetailedItinerary = ({ data }: { data: GetQuoteQuery }) => {
  const router = useRouter();
  const flights = extractSortedFlights(data);
  const flightsPrior =
    data.quote?.days && data.quote?.days.nodes.length === 0
      ? []
      : flights.filter((flight: any) =>
          flight.departureDate
            .utc()
            .isBefore(moment.utc(data.quote?.days?.nodes[0]?.date || ""), "day")
        );
  const flightsAfter = flights.filter((flight: any) =>
    flight.departureDate
      .utc()
      .isAfter(
        moment
          .utc(data.quote?.start ?? "")
          .add((data.quote?.duration ?? 0) - 1, "day"),
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
        <Flights includeDate flights={flightsPrior as FlightDetail[]} />
        {flightsPrior.length > 0 && (
          <div className="has-text-centered">
            <hr />
            <strong>TAKE OFF GO SERVICES COMMENCE</strong>
            <hr />
          </div>
        )}
        {data.quote?.days?.nodes.map((day, index, array) => {
          const combinedDayCount = array.filter(
            (v, i, arr) =>
              i > index && // is after this current day
              v?.accommodationId === day?.accommodationId && // has the same accommodation
              arr[i - 1]?.accommodationId === v?.accommodationId && // has the same accommodation as the previous entry - to avoid clashes if the same accommodation appears twice
              (arr[i - 1]?.activityDetail === v?.activityDetail ||
                !v.activityDetail ||
                !arr[i - 1]?.activityDetail) // has the same (or no) description
          ).length;

          const timeSpan = {
            start: moment.utc(day?.date || "").startOf("day"),
            end: moment
              .utc(day?.date || "")
              .add(combinedDayCount, "day")
              .endOf("day")
          };

          const accom = data.quote?.accommodation?.nodes.find(
            a => a?.id === day?.accommodationId
          );
          const property = accom?.property;
          const destinations = day?.quoteDayDestinationsByDayId.nodes;
          const finalHr = index + 1 !== array.length && (
            <hr className="is-hidden-print" />
          );
          const matchingFlights = flights.filter((flight: any) =>
            flight.departureDate.utc().isBetween(timeSpan.start, timeSpan.end)
          );
          const skip =
            index > 0 &&
            day?.accommodationId === array[index - 1]?.accommodationId &&
            (day?.activityDetail === array[index - 1]?.activityDetail ||
              !array[index - 1]?.activityDetail ||
              !day.activityDetail);

          if (skip) {
            return null;
          }

          const dayDisplay =
            combinedDayCount === 0 ? (
              <strong>Day {(day?.order ?? 0) + 1}</strong>
            ) : (
              [
                <strong key={`${(day?.order ?? 0) + 1}.0`}>
                  Days {(day?.order ?? 0) + 1}
                </strong>,
                <span key={`${(day?.order ?? 0) + 1}.1`}> &ndash; </span>,
                <strong key={`${(day?.order ?? 0) + 1}.2`}>
                  {(day?.order ?? 0) + combinedDayCount + 1}
                </strong>
              ]
            );

          return (
            <React.Fragment key={day?.order ?? 0}>
              <a id={`day-${day?.order ?? 0}`} />
              <div className="columns avoid-page-break">
                <div className="column is-2">
                  <ul>
                    <li>{dayDisplay}</li>
                    <li>{moment(day?.date ?? "").format(dateFormat)}</li>
                    {combinedDayCount > 0 && (
                      <li>
                        <small>
                          to{" "}
                          {moment(day?.date ?? "")
                            .add(combinedDayCount, "day")
                            .format(dateFormat)}
                        </small>
                      </li>
                    )}
                    {destinations && destinations.length > 0 && (
                      <li>
                        <small>
                          {destinations
                            .map(d => [
                              <a
                                key={d?.destination?.id}
                                href={`/travel/destinations/${
                                  d?.destination?.id
                                }?back=${encodeURI(
                                  JSON.stringify({ quote: router.query.key })
                                )}`}
                              >
                                {d?.destination?.name ?? ""}
                              </a>
                            ])
                            .reduce((p, c) => [p[0], <span> to </span>, c[0]])}
                        </small>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="column is-2 is-hidden-tablet">
                  {day?.activitySummary && (
                    <ul>
                      {day.activitySummary
                        .split("\n")
                        .map((text: string, index: number) => (
                          <li key={index}>{text}</li>
                        ))}
                    </ul>
                  )}
                </div>
                <div className="column">
                  <Flights
                    flights={matchingFlights as FlightDetail[]}
                    referenceDate={moment.utc(day?.date ?? "")}
                  />
                  {day?.activityDetail && (
                    <Markdown
                      className="content"
                      source={day?.activityDetail}
                    />
                  )}
                  {property && (
                    <div className="columns is-multiline">
                      <strong className="column is-narrow">
                        Accommodation
                      </strong>
                      <a
                        className="column is-narrow"
                        href={`#property-${property.id}`}
                      >
                        {property.name}
                      </a>
                      {accom?.roomType && (
                        <span className="column is-narrow">
                          {accom.roomType}
                        </span>
                      )}
                      {accom?.foodInclusions &&
                        accom?.foodInclusions?.length > 0 && (
                          <span className="column is-narrow is-hidden-print">
                            {toSentence(accom.foodInclusions as string[])}{" "}
                            included
                          </span>
                        )}
                      {accom?.beverageInclusions &&
                        accom?.beverageInclusions.length > 0 && (
                          <span className="column is-narrow is-hidden-print">
                            {toSentence(accom.beverageInclusions as string[])}{" "}
                            beverages
                          </span>
                        )}
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
          <>
            <div className="has-text-centered">
              <hr />
              <strong>TAKE OFF GO SERVICES CONCLUDE</strong>
              <hr />
            </div>
            <Flights includeDate flights={flightsAfter as FlightDetail[]} />
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default DetailedItinerary;
