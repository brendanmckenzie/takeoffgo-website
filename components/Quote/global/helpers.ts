import moment from "moment-timezone";
import { GetQuoteQuery } from "../../../lib/graphql";

const queryString = (params: any) =>
  Object.keys(params)
    .map(key => [key, params[key]].map(encodeURIComponent).join("="))
    .join("&");

export const mediaUrl = (hash: string, params?: any): string =>
  hash
    ? `https://cdn.takeoffgo.com/${hash}${
        params ? `?${queryString(params)}` : ""
      }`
    : "";

export const sentenceCase = (input: string) =>
  input.substr(0, 1).toUpperCase() + input.substr(1);

export const toSentence = (input: string[]) =>
  input
    ? input
        .reduce(
          (previousValue, currentValue, index, array) =>
            [
              previousValue,
              " ",
              index === 0 ? sentenceCase(currentValue) : currentValue,
              index === array.length - 2 ? " and " : ", "
            ].join(""),
          ""
        )
        .slice(0, -2)
    : null;

export const extractSortedFlights = (data: GetQuoteQuery) => {
  const flights = data.quote?.trip?.tripFlights.nodes;
  if (!flights) {
    return [];
  }
  return flights
    .map(flight => ({
      ...flight,
      departureDate: flight?.departureAirport?.timezone
        ? moment.tz(flight.departure, flight?.departureAirport?.timezone)
        : moment(flight?.departure)
    }))
    .sort((a, b) => a.departureDate.diff(b.departureDate));
};
