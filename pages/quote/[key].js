import { useRouter } from "next/router";
import Quote from "../../components/Quote";

const QuotePage = () => {
  const router = useRouter();
  const { key, preview } = router.query;

  return (
    <Quote
      quoteKey={key}
      track={preview !== "true"}
      viewType="quote"
      router={router}
    />
  );
};

export default QuotePage;
