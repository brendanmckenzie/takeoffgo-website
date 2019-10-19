import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Image from "../components/Image";
import {
  Section,
  Columns,
  Column,
  BrandLine,
  Content,
  Buttons,
  LinkButton
} from "../components/Bulma";
import ContactButton from "../components/ContactButton";
import { imageUrl } from "../lib/util";
import PlacesWeLove, { PlacesWeLoveProps } from "../components/PlacesWeLove";
import PlacesWeLoveData from "../data/places-we-love/current";

const Home: React.FC = () => {
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
              h: 1000
            })
          }}
        />
      </Head>
      <>
        <Section container>
          <Header />

          <Columns>
            <Column>
              <h2 className="title is-2">The extraordinary experience</h2>
              <BrandLine />
              <Content>
                <p>
                  At Take Off Go, we lift Africa’s veil of mystery and reveal a
                  land of adventure.
                </p>
                <p>
                  Our custom travel itineraries expertly weave together
                  excursions through a range of countries, allowing you to
                  experience the hospitality, magic, and solitude of Africa.
                  From the people and the scenery to the safaris and the
                  beaches, the Africa you’ve dreamed of is closer than you
                  think.
                </p>
                <p>
                  Take Off Go curates extraordinary experiences. Let us share
                  our passion for travel with you by helping plan your own
                  unique, once-in-a-lifetime journey through these wild,
                  incredible lands.
                </p>
              </Content>
              <Buttons>
                <ContactButton />

                <LinkButton text iconRight="chevron-right" href="/about">
                  Learn more
                </LinkButton>
              </Buttons>
            </Column>
            <Column width={5}>
              <div className="image is-cover">
                <Image
                  src="a5d1370ab4e48e3d93c022b7d41a3044"
                  alt="Lion looking up"
                />
              </div>
            </Column>
          </Columns>
        </Section>

        <Section container>
          <Columns>
            <Column width={4}>
              <div className="image is-cover">
                <Image
                  src="d9928dd37e0b8e8fcea1aac96744bb9b"
                  alt="Gorilla by tree"
                />
              </div>
            </Column>
            <Column>
              <h2 className="title is-2">Gorilla trekking</h2>
              <h4 className="subtitle is-4">Experience highlight</h4>
              <Content>
                <p>
                  One of the biggest privileges of life might be sitting in
                  silence on the cold ground of a Ugandan forest for 60 minutes.
                  Fewer than 900 mountain gorillas exist, and gorilla trekking
                  offers a rare chance to observe these soft, mysterious
                  primates' daily interactions.
                </p>
              </Content>
              <Buttons>
                <LinkButton
                  text
                  iconRight="chevron-right"
                  href="/gorilla-trekking"
                >
                  Learn more
                </LinkButton>
                <ContactButton />
              </Buttons>
            </Column>
          </Columns>
        </Section>

        <Section container>
          <Image src="3593b8a3e9a7632172cb889797eb1829" alt="Two cheetah" />
        </Section>

        <PlacesWeLove {...(PlacesWeLoveData as PlacesWeLoveProps)} />

        <Section container>
          <Image
            src="7376751cfbef5c4ba8a94d7da8a63c47"
            alt="The view from a Barclay Stenner safari camp"
          />
        </Section>

        <Section container>
          <h2 className="title is-2">From our past guests</h2>
          <h4 className="subtitle is-4">Your stories drive our passion</h4>
          <Content>
            <blockquote>
              <p>
                We cannot speak highly enough of our South African trip
                organised by Take Off Go. The places we visited exceeded our
                expectations. The variety of venues and accommodation gave us a
                broad aspect of African life. A highlight? So many but the Blue
                Train was special.
              </p>
              <p>
                <small>&mdash; Ron Thorpe</small>
              </p>
            </blockquote>
          </Content>
        </Section>

        <Section container>
          <div className="has-text-centered">
            <ContactButton large />
          </div>
        </Section>

        <Section container>
          <Image
            src="70a782590b3ef823251e3d3fe0e90fe6"
            alt="Hot air balloon taking flight over zebra on safari"
          />
        </Section>

        <Footer />
      </>
    </>
  );
};

export default Home;
