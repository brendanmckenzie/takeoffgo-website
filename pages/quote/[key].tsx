import Quote from "../../components/Quote";
import "isomorphic-fetch";

const QuotePage = ({ quote }: any) => {
  return <Quote model={quote} viewType="quote" />;
};

QuotePage.getInitialProps = async ({ query }: any) => {
  const quote = await fetch(`https://cdn.takeoffgo.com/q/${query.key}`).then(
    res => res.json()
  );

  return { quote };
};

export default QuotePage;
