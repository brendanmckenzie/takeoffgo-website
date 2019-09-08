import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Image from "../components/Image";
import {
  Columns,
  Section,
  Column,
  BrandLine,
  Content,
  LinkButton
} from "../components/Bulma";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About us - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Section container>
          <Header showHomeButton />

          <Columns>
            <Column width={4}>
              <h1 className="title is-1">About us</h1>
              <BrandLine />
              <Content>
                <p>
                  Take Off Go is a luxury travel agency that provides custom
                  itineraries for travel throughout Africa.
                </p>

                <p>
                  Founded by travel experts Brendan McKenzie and Ivona
                  Siniarska, Take Off Go is a business built on passion. This
                  duo has clocked thousands of hours exploring Africa’s vast
                  lands, and want to share that experience and admiration for
                  the continent by planning your once-in-a-lifetime journey.
                </p>
                <p>
                  Take Off Go removes the stress from planning travel to a new
                  and exotic place. They take the time to learn about you and
                  your party’s goals and desires, and develop unique itineraries
                  that best tick off the boxes on your Africa bucket list. A
                  jungle exploration that takes you up-close and personal with
                  gorillas? They can get you on that excursion. A week-long
                  guided safari, camped beneath the desert stars? They know more
                  than a few. Maybe you’re after a cosmopolitan experience?
                  They’ll set you up in the best cities to discover its hot
                  spots.
                </p>
                <p>
                  Let Take Off Go turn your African dream vacation into a
                  lifetime of memories.
                </p>
              </Content>
              <LinkButton dark rounded href="mailto:sales@takeoffgo.com">
                Contact us
              </LinkButton>
            </Column>
            <Column>
              <h2 className="title is-2">Who we are</h2>
              <div className="columns">
                <Column>
                  <figure className="image is-4by3">
                    <Image
                      src="9c4e3c4b80719ce12c8d98d68043e3de"
                      alt="Ivona Siniarska"
                    />
                  </figure>
                  <BrandLine />
                  <h4 className="subtitle is-4">Ivona Siniarska</h4>
                  <p>
                    Having traveled extensively through 80 countries on this
                    planet, Ivona shares her passion for bespoke experiences
                    that help you truly experience nature, wildlife, food, and
                    culture on all corners of the world.
                  </p>
                </Column>
                <Column>
                  <figure className="image is-4by3">
                    <Image
                      src="eca872c7ada8fe0d95f927403b9995fc"
                      alt="Brendan McKenzie"
                    />
                  </figure>
                  <BrandLine />
                  <h4 className="subtitle is-4">Brendan McKenzie</h4>
                  <p>
                    Contracting the travel bug after moving to the United
                    Kingdom at 25, Brendan realised that a life spent traveling
                    is a life worth living. After being introduced to Africa by
                    Ivona he was hooked and now looks to spend his days sharing
                    the love for the dark continent.
                  </p>
                </Column>
              </div>
            </Column>
          </Columns>
        </Section>

        <Footer />
      </>
    </>
  );
};

export default Home;
