import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Payment from "../../components/Payment";
import Head from "next/head";
import Meta from "../../components/Meta";
import { PublicInvoice } from "../../lib/models/types";

import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../../lib/with-apollo-client";

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
      customer
    }
  }
`;

type InvoiceQuery = {
  invoice: PublicInvoice;
};

const PaymentPage: React.FC = ({ apolloClient }: any) => {
  const router = useRouter();
  const { id, amount } = router.query;

  const { loading, error, data } = useQuery<InvoiceQuery>(PAYMENT_QUERY, {
    variables: { id }
  });

  if (loading) {
    return <div />;
  }

  if (error) {
    return <pre>Error: {JSON.stringify(error, null, 2)}</pre>;
  }

  if (data) {
    return (
      <>
        <Head>
          <title>
            Payment for invoice #{data.invoice.number} - Take Off Go
          </title>
          <Meta router={router} />
        </Head>
        <ApolloProvider client={apolloClient}>
          <Payment
            model={{
              invoice: data.invoice,
              amount: parseFloat(amount as string)
            }}
          />
        </ApolloProvider>
      </>
    );
  }

  return null;
};

const PaymentPageWrapped: React.FC = ({ apolloClient }: any) => (
  <ApolloProvider client={apolloClient}>
    <PaymentPage />
  </ApolloProvider>
);

export default withApolloClient(PaymentPageWrapped);
