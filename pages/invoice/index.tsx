import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Invoice from "../../components/Invoice";
import Meta from "../../components/Meta";

import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../../lib/with-apollo-client";

// import "../../style/print.scss";

export const INVOICE_QUERY = gql`
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

const InvoicePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(INVOICE_QUERY, {
    variables: { id }
  });

  if (loading) {
    return <div />;
  }

  if (error) {
    return <pre>Error: {JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <>
      <Head>
        <title>Invoice #{data.invoice.number} - Take Off Go</title>
        <Meta router={router} />
        <style type="text/css">{"@page {size: A4;}"}</style>
      </Head>
      <Invoice model={data.invoice} />
    </>
  );
};

const InvoicePageWrapped: React.FC = ({ apolloClient }: any) => (
  <ApolloProvider client={apolloClient}>
    <InvoicePage />
  </ApolloProvider>
);

export default withApolloClient(InvoicePageWrapped);
