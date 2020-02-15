import QuoteComp from "../../components/Quote";
import withData from "../../lib/apollo";
import { useGetQuoteQuery } from "../../lib/graphql";
import { useRouter } from "next/router";

const QuotePage = () => {
  const router = useRouter();
  const query = useGetQuoteQuery({
    variables: { key: router.query.key as string }
  });

  if (query.loading || !query.data) {
    return null;
  }

  return <QuoteComp model={query.data} viewType="quote" />;
};

export default withData(QuotePage);
