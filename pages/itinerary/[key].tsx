import Quote from "../../components/Quote";
import "isomorphic-fetch";

const ItineraryPage = ({ quote }: any) => {
  return <Quote model={quote} />;
};

ItineraryPage.getInitialProps = async ({ query }: any) => {
  const quote = await fetch(`https://cdn.takeoffgo.com/q/${query.key}`).then(
    res => res.json()
  );

  return {
    quote: { ...quote, total: 0, nextPayment: null, totalOutstanding: 0 }
  };
};

export default ItineraryPage;
