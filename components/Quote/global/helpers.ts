import moment from "moment-timezone";

const queryString = (params: any) =>
  Object.keys(params)
    .map(key => [key, params[key]].map(encodeURIComponent).join("="))
    .join("&");

export const mediaUrl = (
  id: string,
  params?: any,
  // absolute?: boolean
): string =>
  id
    ? `https://api.takeoffgo.com/dev/api/media/galleries/item?id=${id}${
        params ? `&${queryString(params)}` : ""
      }`
    : "";
// id
//   ? `${absolute ? "https://www.takeoffgo.com" : ""}/quote/media?id=${id}${
//       params ? `&${queryString(params)}` : ""
//     }`
//   : "";

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

export const extractSortedFlights = (data: any) => {
  const { flights, airports } = data;
  return flights
    .map((flight: any) => {
      const departureAirport = airports.find(
        (airport: any) =>
          airport.iata === flight.departure.airport ||
          airport.icao === flight.departure.airport
      );
      return {
        ...flight,
        departureDate: departureAirport
          ? moment.tz(flight.departure.date, departureAirport.timezone)
          : moment(flight.departure.date)
      };
    })
    .sort((a: any, b: any) => a.departureDate.diff(b.departureDate));
};
