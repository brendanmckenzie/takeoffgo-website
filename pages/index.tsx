import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { imageUrl } from "../lib/util";
import PlacesWeLove from "../components/PlacesWeLove";
import { GetStaticProps } from "next";
import { client } from "../lib/pokko";
import {
  GetHomeDocument,
  GetHomeQuery,
  HomeModuleFragment,
} from "../api/pokko";
import { HeroModule } from "../components/modules/Hero/module";
import { HighlightModule } from "../components/modules/Highlight/module";
import { ImageModule } from "../components/modules/Image/module";
import { CustomerQuoteModule } from "../components/modules/CustomerQuote/module";

const Home: React.FC<GetHomeQuery> = ({ entry }) => {
  console.log(entry)
  if (entry?.__typename === "ModularPage") {
    const router = useRouter();
    return (
      <>
        <Head>
          <title>Experience the Extraordinary - Take Off Go</title>
          <Meta
            router={router}
            model={{
              "og:image": imageUrl("d9928dd37e0b8e8fcea1aac96744bb9b", {
                w: 1000,
                h: 1000,
              }),
            }}
          />
        </Head>
        <>
          <Header />

          {entry?.components?.map((ent, idx) => (
            <HomeModuleHandler key={idx} {...ent} />
          ))}

          <Footer />
        </>
      </>
    );
  }

  return null;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query<GetHomeQuery>({
    query: GetHomeDocument,
    fetchPolicy: "network-only",
  });

  return {
    revalidate: 3600,
    props: { entry: res.data.entry },
  };
};

const HomeModuleHandler: React.FC<HomeModuleFragment> = (props) => {
  switch (props.__typename) {
    case "Hero":
      return <HeroModule {...props} />;
    case "Highlight":
      return <HighlightModule {...props} />;
    case "Image":
      return <ImageModule {...props} />;
    case "CustomerQuote":
      return <CustomerQuoteModule {...props} />;
    case "FiftyFifty":
      return <PlacesWeLove />;

    default:
      return (
        <pre>
          unhandled module: {props.__typename} - {JSON.stringify(props)}
        </pre>
      );
  }
};
