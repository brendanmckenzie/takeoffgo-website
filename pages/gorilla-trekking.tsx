import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Image from "../components/Image";
import {
  Column,
  Columns,
  Content,
  BrandLine,
  Section
} from "../components/Bulma";
import ContactButton from "../components/ContactButton";

const GorillaTrekking: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Gorilla trekking - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Section container>
          <Header showHomeButton />

          <Columns>
            <Column>
              <h2 className="title is-2">Gorilla trekking</h2>
              <BrandLine />
              <Content>
                <p>
                  Mountain gorillas live only in the thick vegetation of
                  Uganda's Bwindi Impenetrable Forest National Park and along
                  the dormant Virunga mountain range that extends across
                  Rwanda's Volcanoes National Park, Uganda's Mgahinga Gorilla
                  National Park, and the Democratic Republic of Congo's Virunga
                  National Park.
                </p>
                <p>
                  Environmentalists estimated, in 1981, that there were only 254
                  mountain gorillas left on earth, but due to intense global
                  conservation attempts, the tiny population is growing slowly.
                  Since these critically endangered creatures can not survive in
                  captivity, walking to their natural habitat is the only way to
                  see them: misty cloud forests that can reach altitudes of
                  14,763 feet.
                </p>
              </Content>
              <ContactButton />
            </Column>
            <Column>
              <Image
                src="d9928dd37e0b8e8fcea1aac96744bb9b"
                alt="Gorilla by tree"
              />
            </Column>
          </Columns>
        </Section>

        <Section container>
          <Columns centred>
            <Column width={4}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-cover is-3by4">
                    <Image
                      src="6e5b9dd1313ba1c2240e500a7d378457"
                      alt="Two gorilla sitting"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h4 className="subtitle">Uganda</h4>
                  <p>
                    Historically, Uganda has always been well known for seeing
                    gorillas and offered the chance to see gorillas in two
                    destinations – the Bwindi Impenetrable Forest and the
                    Mgahinga National Park. Both regions are in the south-west
                    of the country, at least two days drive from Uganda’s
                    capital city Kampala, although there is now a scheduled air
                    service to the Bwindi region. Bwindi is still very much a
                    key region to consider, but, in recent years Mgahinga has
                    been troubled by inconsistent sightings as the family groups
                    cross the border into Rwanda.
                  </p>
                </div>
              </div>
            </Column>
            <Column width={4}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-cover is-3by4">
                    <Image
                      src="1076ffd62ec01f262bca6f95788a0236"
                      alt="Gorilla scratching nose"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h4 className="subtitle">Rwanda</h4>
                  <p>
                    In Rwanda, the gorilla tracking industry has developed
                    hugely over the last few years. The range of Virunga
                    volcanoes form the Volcanoes National Park, the area made
                    famous by researcher Dian Fossey and this area is generally
                    regarded as the easiest option if your priority is purely
                    seeing the gorillas rather than enjoying an extended tour of
                    the region. Kigali, the capital, is just two hours drive
                    south of the Virunga and with regular international flight
                    connections, access is made very easy.
                  </p>
                </div>
              </div>
            </Column>
          </Columns>
        </Section>

        <Section container>
          <div className="has-text-centered">
            <ContactButton large />
          </div>
        </Section>

        <Footer />
      </>
    </>
  );
};

export default GorillaTrekking;
