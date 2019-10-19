import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Payment from "../../components/Payment";
import Head from "next/head";
import Meta from "../../components/Meta";
import { PublicInvoice } from "../../lib/models/types";

import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../../lib/with-apollo-client";
import Header from "../../components/Header";
import { Section } from "../../components/Bulma";

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

const PaymentContent: React.FC<any> = ({ loading, error, data, amount }) => {
  if (loading) {
    return (
      <div className="message">
        <div className="message-body">
          Loading your payment deatils; please wait.
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return (
      <div className="message is-danger">
        <div className="message-body">
          An error occurred loading the payment deatils. Please contact your
          Take Off Go representative.
        </div>
      </div>
    );
  }

  return (
    <Payment
      model={{
        invoice: data.invoice,
        amount
      }}
    />
  );
};

type InvoiceQuery = {
  invoice: PublicInvoice;
};

const PaymentPage: React.FC = () => {
  const router = useRouter();
  const { id, amount } = router.query;

  const query = useQuery<InvoiceQuery>(PAYMENT_QUERY, {
    variables: { id }
  });

  return (
    <>
      <Head>
        <title>Payment - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <Section container>
        <Header />
        <div className="columns is-centered">
          <div className="column is-4">
            <PaymentContent {...query} amount={parseFloat(amount as string)} />
          </div>
        </div>
      </Section>
    </>
  );
};

const PaymentPageWrapped: React.FC = ({ apolloClient }: any) => (
  <ApolloProvider client={apolloClient}>
    <PaymentPage />
  </ApolloProvider>
);

export default withApolloClient(PaymentPageWrapped);
