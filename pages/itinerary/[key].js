import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Quote from "../../components/Quote";

const ItineraryPage = () => {
  const [quote, setQuote] = useState(null);

  const router = useRouter();
  const { key } = router.query;

  useEffect(() => {
    fetch(`https://cdn.takeoffgo.com/q/${key}`)
      .then(res => res.json())
      .then(res => {
        setQuote({ ...res, total: 0, nextPayment: null, totalOutstanding: 0 });
      });
  }, []);

  if (quote) {
    return <Quote model={quote} />;
  } else {
    return <pre>Loading...</pre>;
  }
};

export default ItineraryPage;
