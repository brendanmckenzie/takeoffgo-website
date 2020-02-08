import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import Header from "../../../components/Header";
import {
  Section,
  Columns,
  Column,
  BrandLine,
  Content
} from "../../../components/Bulma";
import Image from "../../../components/Image";
import Map from "../../../components/Quote/components/Map";
import Footer from "../../../components/Footer";

const Property: React.FC = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Gunn's Camp - Properties - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Header showHomeButton />

        <Section container>
          <Columns>
            <Column>
              <h2 className="title is-2">Gunn's Camp</h2>
              <BrandLine />
              <Content>
                <p>
                  Gunn's Camp is on the edge of the Moremi Game Reserve in the
                  Okavango Delta’s wilderness, overlooking floodplains brimming
                  with wildlife. Leafy palms and ancient ebony trees merge to
                  create an authentic African feel – with a touch of the
                  tropics.
                </p>
              </Content>
            </Column>
            <Column>
              <div className="image is-cover">
                <Image
                  src="1bdeef7f74e5ef6d2eaf112acd80a7fa"
                  alt="Gunn's camp"
                />
              </div>
            </Column>
          </Columns>
        </Section>
        <Section container>
          <Columns>
            <Column narrow>
              <h3 className="heading">Country</h3>
              <h4 className="title">Botswana</h4>
            </Column>
            <Column narrow>
              <h3 className="heading">Nearest airport</h3>
              <h4 className="title">Gaborone</h4>
            </Column>
            <Column narrow>
              <h3 className="heading">Highlights</h3>
              <h4 className="title">Game viewing</h4>
            </Column>
            <Column narrow>
              <h3 className="heading">Timezone</h3>
              <h4 className="title">UTC+0100</h4>
            </Column>
            <Column />
          </Columns>
        </Section>

        <Section container>
          <Columns>
            <Column>
              <div className="image">
                <Image
                  src="6bb9fd86118276067345c06bbba0bb40"
                  alt="Gunn's camp"
                  onClick={() =>
                    setImage(
                      image === "6bb9fd86118276067345c06bbba0bb40"
                        ? null
                        : "6bb9fd86118276067345c06bbba0bb40"
                    )
                  }
                />
              </div>
            </Column>
            <Column>
              <div className="image">
                <Image
                  src="b95979dbd54cca6e3b2ccb57b6bb8059"
                  alt="Gunn's camp"
                  onClick={() =>
                    setImage(
                      image === "b95979dbd54cca6e3b2ccb57b6bb8059"
                        ? null
                        : "b95979dbd54cca6e3b2ccb57b6bb8059"
                    )
                  }
                />
              </div>
            </Column>
            <Column>
              <div className="image">
                <Image
                  src="a4a87ba3c61eff3991be9a1776fb4091"
                  alt="Gunn's camp"
                  onClick={() =>
                    setImage(
                      image === "a4a87ba3c61eff3991be9a1776fb4091"
                        ? null
                        : "a4a87ba3c61eff3991be9a1776fb4091"
                    )
                  }
                />
              </div>
            </Column>
          </Columns>
          {image && (
            <div className="image is-cover">
              <Image src={image} />
            </div>
          )}
        </Section>
        <Map
          data={{
            properties: [
              { latitude: -19.9779816, longitude: 23.4248677, id: "asdf" }
            ],
            airports: []
          }}
        />
        <Footer />
      </>
    </>
  );
};

export default Property;
