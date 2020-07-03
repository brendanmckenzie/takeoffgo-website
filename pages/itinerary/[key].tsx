import QuoteComp from "../../components/Quote";
import withApollo from "../../lib/apollo";
import { useGetQuoteQuery } from "../../lib/graphql";
import { useRouter } from "next/router";

const QuotePage = () => {
  const router = useRouter();
  const query = useGetQuoteQuery({
    variables: { key: router.query.key as string },
    skip: !router.query.key,
  });

  if (query.loading || !query.data || !router.query.key) {
    return null;
  }

  return (
    <QuoteComp
      model={{ quote: { ...query.data.quote, total: 0 } }}
      viewType="itinerary"
    />
  );
};

export default withApollo({ ssr: false })(QuotePage);
