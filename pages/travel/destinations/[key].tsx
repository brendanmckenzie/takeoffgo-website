import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import Header from "../../../components/Header";
import { Section, Columns, Column, BrandLine } from "../../../components/Bulma";
import Image from "../../../components/Image";
// import Map from "../../../components/Quote/components/Map";
import Footer from "../../../components/Footer";
import withData from "../../../lib/apollo";
import ReactMarkdown from "react-markdown";
import { useGetDestinationQuery, Destination } from "../../../lib/graphql";

const DestinationPage: React.FC = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);

  const query = useGetDestinationQuery({ variables: { id: router.query.key } });

  if (query.loading || !query.data) {
    return null;
  }

  const destination = query.data.destination as Destination;

  const heroMedia = destination.gallery?.mediaGalleryItems.nodes[0];

  return (
    <>
      <Head>
        <title>{destination.name} - Properties - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Header showHomeButton />

        <Section container>
          <Columns>
            <Column>
              <h2 className="title is-2">{destination.name}</h2>
              <BrandLine />
              {destination.body && (
                <ReactMarkdown className="content" source={destination.body} />
              )}
            </Column>
            {heroMedia && (
              <Column>
                {heroMedia && heroMedia.mediaItem?.hash && (
                  <div className="image is-cover">
                    <Image
                      src={heroMedia.mediaItem.hash}
                      alt={destination.name || "Image of Destination"}
                    />
                  </div>
                )}
              </Column>
            )}
          </Columns>
        </Section>
        <Section container>
          <Columns>
            <Column narrow>
              <h3 className="heading">Country</h3>
              <h4 className="title">{destination.country?.name}</h4>
            </Column>
            <Column />
          </Columns>
        </Section>

        <Section container>
          <Columns multiline>
            {destination.gallery?.mediaGalleryItems.nodes.map((ent: any) => (
              <Column key={ent.id} width={4}>
                <div className="image">
                  <Image
                    src={ent.mediaItem.hash}
                    alt={ent.mediaItem.name}
                    onClick={() =>
                      setImage(
                        image === ent.mediaItem.hash ? null : ent.mediaItem.hash
                      )
                    }
                  />
                </div>
              </Column>
            ))}
          </Columns>
          {destination.gallery?.mediaGalleriesByParentId.nodes.map(
            (ent: any) => (
              <React.Fragment key={ent.id}>
                <p className="heading">{ent.name}</p>
                <Columns multiline>
                  {ent.mediaGalleryItems.nodes.map((ent: any) => (
                    <Column key={ent.id} width={4}>
                      <div className="image">
                        <Image
                          src={ent.mediaItem.hash}
                          alt={ent.mediaItem.name}
                          onClick={() =>
                            setImage(
                              image === ent.mediaItem.hash
                                ? null
                                : ent.mediaItem.hash
                            )
                          }
                        />
                      </div>
                    </Column>
                  ))}
                </Columns>
              </React.Fragment>
            )
          )}
          {image && (
            <div className="image is-cover is-hidden-mobile">
              <Image src={image} />
            </div>
          )}
        </Section>
        {/* {destination.latitude && destination.longitude && (
          <Map
            points={[
              {
                lat: destination.latitude,
                lng: destination.longitude,
                id: destination.id,
                icon: "hotel",
                title: destination.name || "",
                body: destination.summary || "",
                type: "Destination"
              }
            ]}
          />
        )} */}
        <Footer />
      </>
    </>
  );
};

export default withData(DestinationPage);
