import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import moment from "moment";

import { mediaUrl } from "./global/helpers";
import initApollo from "../../lib/init-apollo";
import { ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

import Accommodation from "./components/Accommodation";
import ContactInformation from "./components/ContactInformation";
import DetailedItinerary from "./components/DetailedItinerary";
import Finances from "./components/Finances";
import Hero from "./components/Hero";
import Map from "./components/Map";
import SummarisedItinerary from "./components/SummarisedItinerary";
import Summary from "./components/Summary";
import Terms from "./components/Terms";
import Header from "../Header";
import Footer from "../Footer";
import Meta from "../Meta";
import Image from "../Image";

const mapModelToMeta = (model: any) => {
  const fromHero = () => {
    if (model.hero) {
      return {
        title: model.hero.title,
        description: model.hero.subtitle,
        "og:image": model.hero
          ? mediaUrl(model.hero.image as string, { width: 1000, height: 1000 })
          : null
      };
    } else {
      return {};
    }
  };

  return {
    ...fromHero()
  };
};

type QuoteProps = {
  model: any;
  viewType: string;
};

const Quote: React.FC<QuoteProps> = ({ model, viewType }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.preview !== "true") {
      const apollo = initApollo({}) as ApolloClient<{}>;
      apollo.query({
        query: gql`
          query trackQuoteView($key: String!, $viewType: String!) {
            trackQuoteView(key: $key, viewType: $viewType) {
              success
            }
          }
        `,
        variables: {
          key: router.query.key,
          viewType
        }
      });
    }
  }, []);

  const Logo = () => {
    return (
      <Image
        src={model.agency.logo}
        alt={model.agency.name}
        style={{ height: 60 }}
      />
    );
  };

  return (
    <>
      <Head>
        <title>
          {model.hero ? model.hero.title : "Quote"} - Take Off Go - Experience
          the Extraordinary
        </title>

        <Meta model={mapModelToMeta(model)} router={router} />
      </Head>
      <a id="top" />
      <Header overrideLogo={model.agency ? Logo : undefined} />
      <section className="section container">
        {model.hero && <Hero data={model} />}
      </section>

      {(!model.locked || (model.total > 0 && model.status === "Confirmed")) &&
        moment(model.start).isAfter(moment()) && (
          <section className="section container">
            {!model.locked && (
              <div className="message is-warning">
                <div className="message-header">Work in progress</div>
                <div className="message-body">
                  Please note that this quote is work in progress and may
                  change. Accommodation, daily activities and pricing are
                  subject to change while this message is present.
                </div>
              </div>
            )}
            {model.total > 0 && model.status === "Confirmed" && (
              <div className="message is-success">
                <div className="message-header">Confirmed</div>
                <div className="message-body">
                  This quote has been accepted by you and will now be processed
                  by the team at Take Off Go. We will provide you with updates
                  as we progress and be in touch if we require any additional
                  information from you.
                </div>
              </div>
            )}
          </section>
        )}

      <Summary data={model} />
      <SummarisedItinerary data={model} />
      <DetailedItinerary data={model} />
      <Map data={model} />
      <Accommodation data={model} />
      {model.consultant && <ContactInformation data={model} />}
      {model.total > 0 && (
        <>
          <Finances data={model} />
          <Terms data={model} />
        </>
      )}
      <Footer />
    </>
  );
};

export default Quote;
