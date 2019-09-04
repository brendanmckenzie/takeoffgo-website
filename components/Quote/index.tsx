import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import QuoteNew from "./QuotePage";
import { PublicQuote } from "../../lib/models/types";

export const QUOTE_QUERY = gql`
  query quote($key: String!, $track: Boolean!, $viewType: String!) {
    quote(key: $key, track: $track, viewType: $viewType) {
      accommodation {
        id
        inclusions {
          beverage
          food
        }
        property
        room
      }
      agency {
        logo
        name
      }
      airports {
        city
        country
        iata
        icao
        latitude
        longitude
        timezone
      }
      consultant {
        email
        genderPreposition
        name
        phone
      }
      currency
      days {
        accommodation
        activities {
          detail
          summary
        }
        date
        destinations
        index
      }
      destinations {
        id
        name
      }
      duration
      exclusions
      expiry
      flights {
        arrival {
          airport
          date
        }
        carrier
        departure {
          airport
          date
        }
        id
        number
      }
      groupSize
      hero {
        image
        style
        subtitle
        title
      }
      inclusions
      locked
      nextPayment {
        amount
        due
        type
        url
      }
      properties {
        id
        latitude
        longitude
        name
        overview
        thumbnail
      }
      start
      status
      total
      totalOutstanding
    }
  }
`;

type QuoteProps = {
  quoteKey: string;
  track: Boolean;
  viewType: "quote" | "itinerary";
};

type QueryResult = {
  quote: PublicQuote;
};

const Quote: React.FC<QuoteProps> = ({ quoteKey, track, viewType }) => {
  const { loading, error, data } = useQuery<QueryResult>(QUOTE_QUERY, {
    variables: { key: quoteKey, track, viewType }
  });

  if (loading) {
    return <div />;
  }

  if (error) {
    return <pre>Error: {JSON.stringify(error, null, 2)}</pre>;
  }

  if (data) {
    return <QuoteNew model={data.quote} />;
  }

  return null;
};

export default Quote;
