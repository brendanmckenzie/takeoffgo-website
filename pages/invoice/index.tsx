import { useRouter } from "next/router";
import Head from "next/head";
import Invoice from "../../components/Invoice";
import Meta from "../../components/Meta";

import withApollo from "../../lib/apollo";
import Header from "../../components/Header";
import {
  useGetInvoiceQuery,
  GetInvoiceQueryResult,
  InvoicePublic,
} from "../../lib/graphql";

const InvoiceContent: React.FC<GetInvoiceQueryResult> = ({
  loading,
  error,
  data,
}) => {
  if (loading || !data?.invoice) {
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

  return <Invoice model={data?.invoice as InvoicePublic} />;
};

const InvoicePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const query = useGetInvoiceQuery({
    variables: { id },
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

export default withApollo({ ssr: false })(InvoicePage);
