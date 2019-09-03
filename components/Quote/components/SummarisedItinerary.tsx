import React from "react";
import moment from "moment";

import { dateFormat } from "../global/constants";
import { toSentence } from "../global/helpers";

const SummarisedItinerary = ({ data }: any) => (
  <section
    id="summarised-itinerary"
    className="section container is-hidden-mobile is-page-break"
  >
    <table className="table is-striped is-hoverable is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Day</th>
          <th>Activities</th>
          <th>Accommodation</th>
        </tr>
      </thead>
      <tbody>
        {data.days.map((day: any, index: number, array: any[]) => {
          const isFirst = index === 0;
          const prev = isFirst ? null : array[index - 1];
          const newAccom =
            prev === null || day.accommodation !== prev.accommodation;
          const accomDayCount = array.filter(
            (v, i, arr) =>
              i > index && // is after this current day
              v.accommodation === day.accommodation && // has the same accommodation
              arr[i - 1].accommodation === v.accommodation // has the same accommodation as the previous entry - to avoid clashes if the same accommodation appears twice
          ).length;
          const accom = data.accommodation.find(
            (a: any) => a.id === day.accommodation
          );
          const property = accom
            ? data.properties.find((p: any) => p.id == accom.property)
            : null;
          const destinations = day.destinations.map((id: any) =>
            data.destinations.find((d: any) => d.id === id)
          );

          return (
            <tr key={day.index}>
              <td>
                <ul>
                  <li>
                    <strong>
                      <a href={`#day-${day.index}`}>Day {day.index + 1}</a>
                    </strong>
                  </li>
                  <li>{moment(day.date).format(dateFormat)}</li>
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
              </td>
              <td>
                {day.activities.summary && (
                  <ul>
                    {day.activities.summary
                      .split("\n")
                      .map((text: string, index: number) => (
                        <li key={index}>{text}</li>
                      ))}
                  </ul>
                )}
              </td>
              {newAccom && (
                <td rowSpan={accomDayCount + 1}>
                  {accom && (
                    <ul>
                      {property && (
                        <li>
                          <a href={`#property-${property.id}`}>
                            {property.name}
                          </a>
                        </li>
                      )}
                      <li>{accom.room}</li>
                      {accom.inclusions.food.length > 0 && (
                        <li className="is-hidden-print">
                          {toSentence(accom.inclusions.food)} included
                        </li>
                      )}
                      {accom.inclusions.beverage.length > 0 && (
                        <li className="is-hidden-print">
                          {toSentence(accom.inclusions.beverage)} beverages
                        </li>
                      )}
                    </ul>
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>
);

export default SummarisedItinerary;
