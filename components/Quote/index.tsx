import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import moment from "moment";

import { mediaUrl } from "./global/helpers";

import Accommodation from "./components/Accommodation";
import ContactInformation from "./components/ContactInformation";
import DetailedItinerary from "./components/DetailedItinerary";
import Finances from "./components/Finances";
import Hero from "./components/Hero";
import Map, { extractPoints } from "./components/Map";
import SummarisedItinerary from "./components/SummarisedItinerary";
import Summary from "./components/Summary";
import Terms from "./components/Terms";
import Header from "../Header";
import Footer from "../Footer";
import Meta from "../Meta";
import Image from "../Image";
import { GetQuoteQuery, useTrackQuoteViewMutation } from "../../lib/graphql";
import withData from "../../lib/apollo";

const mapModelToMeta = (model: GetQuoteQuery) => {
  const fromHero = () => {
    if (model.quote?.hero) {
      return {
        title: model.quote.hero.title,
        description: model.quote.hero.subtitle,
        "og:image": model.quote.hero.image?.hash
          ? mediaUrl(model.quote.hero.image?.hash, {
              w: 1000,
              h: 1000
            })
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
  model: GetQuoteQuery;
  viewType: string;
};

const QuoteComp: React.FC<QuoteProps> = ({ model, viewType }) => {
  const router = useRouter();
  const [trackQuoteView] = useTrackQuoteViewMutation();

  useEffect(() => {
    if (router.query.preview !== "true") {
      trackQuoteView({
        variables: { key: router.query.key as string, viewType }
      });
    }
  }, []);

  const Logo = () => {
    return (
      <Image
        src={model.quote?.trip?.agency?.logo?.hash || ""}
        alt={model.quote?.trip?.agency?.name || ""}
        style={{ height: 60 }}
      />
    );
  };

  const points = extractPoints(model);

  return (
    <>
      <Head>
        <title>
          {model.quote?.hero ? model.quote.hero.title : "Quote"} - Take Off Go -
          Experience the Extraordinary
        </title>

        <Meta model={mapModelToMeta(model)} router={router} />
      </Head>
      <a id="top" />
      <Header overrideLogo={model.quote?.trip?.agency ? Logo : undefined} />
      <section className="section container">
        {model.quote?.hero && <Hero data={model} />}
      </section>

      {(!model.quote?.locked ||
        (model.quote?.total > 0 && model.quote?.status === 1)) &&
        moment(model.quote?.start || "").isAfter(moment()) && (
          <section className="section container">
            {!model.quote?.locked && (
              <div className="message is-warning">
                <div className="message-header">Work in progress</div>
                <div className="message-body">
                  Please note that this quote is work in progress and may
                  change. Accommodation, daily activities and pricing are
                  subject to change while this message is present.
                </div>
              </div>
            )}
            {model.quote?.total > 0 && model.quote?.status === 1 && (
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
      <Map points={points} />
      <Accommodation data={model} />
      <ContactInformation data={model} />
      {model.quote?.total > 0 && (
        <>
          <Finances data={model} />
          <Terms data={model} />
        </>
      )}
      <Footer />
    </>
  );
};

export default withData(QuoteComp);
