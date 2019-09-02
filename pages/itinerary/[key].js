import { useRouter } from "next/router";
import Quote from "../../components/Quote";

const ItineraryPage = () => {
  const router = useRouter();
  const { key, preview } = router.query;

  return (
    <Quote quoteKey={key} track={preview !== "true"} viewType="itinerary" />
  );
};

export default ItineraryPage;
