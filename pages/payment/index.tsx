import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Payment from "../../components/Payment";

export const PAYMENT_QUERY = gql`
  query invoice($id: ID!) {
    invoice(id: $id) {
      amountDue
      amountPaid
      currency
      due
      id
      invoiced
      items {
        id
        description
        amount
        quantity
        total
        currency
      }
      number
      paid
      paymentUrl
      subtitle
      total
    }
  }
`;

const PaymentPage: React.FC = () => {
  const router = useRouter();
  const { id, amount } = router.query;

  const { loading, error, data } = useQuery(PAYMENT_QUERY, {
    variables: { id }
  });

  if (loading) {
    return <div />;
  }

  if (error) {
    return <pre>Error: {JSON.stringify(error, null, 2)}</pre>;
  }

  return <Payment model={{ invoice: data.invoice, amount }} />;
};

export default PaymentPage;
