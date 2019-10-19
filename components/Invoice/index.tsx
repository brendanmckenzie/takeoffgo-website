import React from "react";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import LineItems from "./components/LineItems";
import Total from "./components/Total";

type InvoiceProps = {
  model: any;
};

const Invoice: React.FC<InvoiceProps> = ({ model }: any) => (
  <>
    <main className="body">
      <Summary data={model} />
      <hr className="is-emphasised" />
      <LineItems data={model} />
      <Total data={model} />
    </main>
    <Footer data={model} />
  </>
);

export default Invoice;
