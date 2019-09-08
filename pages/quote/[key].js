import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Quote from "../../components/Quote";

const QuotePage = () => {
  const [quote, setQuote] = useState(null);

  const router = useRouter();
  const { key } = router.query;

  useEffect(() => {
    fetch(`https://cdn.takeoffgo.com/q/${key}`)
      .then(res => res.json())
      .then(res => {
        setQuote(res);
      });
  }, []);

  if (quote) {
    return <Quote model={quote} />;
  } else {
    return <pre>Loading...</pre>;
  }
};

export default QuotePage;
