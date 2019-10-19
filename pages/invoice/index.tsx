import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Invoice from "../../components/Invoice";
import Meta from "../../components/Meta";

import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../../lib/with-apollo-client";
import Header from "../../components/Header";

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

const InvoiceContent: React.FC<any> = ({ loading, error, data }) => {
  if (loading) {
    return (
      <main className="body">
        <div className="message">
          <div className="message-body">Loading your invoice; please wait.</div>
        </div>
      </main>
    );
  }

  if (error) {
    console.error(error);
    return (
      <main className="body">
        <div className="message is-danger">
          <div className="message-body">
            An error occurred loading this invoice. Please contact your Take Off
            Go representative.
          </div>
        </div>
      </main>
    );
  }

  return <Invoice model={data.invoice} />;
};

const InvoicePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const query = useQuery(INVOICE_QUERY, {
    variables: { id }
  });

  return (
    <>
      <Head>
        <title>Invoice - Take Off Go</title>
        <Meta router={router} />
        <style type="text/css">{"@page {size: A4;}"}</style>
      </Head>
      <section className="sheet container padding-10mm">
        <Header />
        <InvoiceContent {...query} />
      </section>
    </>
  );
};

const InvoicePageWrapped: React.FC = ({ apolloClient }: any) => (
  <ApolloProvider client={apolloClient}>
    <InvoicePage />
  </ApolloProvider>
);

export default withApolloClient(InvoicePageWrapped);
