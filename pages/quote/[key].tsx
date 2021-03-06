import QuoteComp from "../../components/Quote";
import withApollo from "../../lib/jambo";
import { useGetQuoteQuery } from "../../api/jambo";
import { useRouter } from "next/router";

const QuotePage = () => {
  const router = useRouter();
  const query = useGetQuoteQuery({
    variables: { key: router.query.key as string },
  });

  if (query.loading || !query.data) {
    return null;
  }

  return <QuoteComp model={query.data} viewType="quote" />;
};

export default withApollo({ ssr: false })(QuotePage);
