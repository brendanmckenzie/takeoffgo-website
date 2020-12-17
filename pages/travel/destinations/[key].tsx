import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import Header from "../../../components/Header";
import { Section, Columns, Column, BrandLine } from "../../../components/Bulma";
import Image from "../../../components/Image";
import Map from "../../../components/Quote/components/Map";
import Footer from "../../../components/Footer";
import withApollo from "../../../lib/jambo";
import ReactMarkdown from "react-markdown";
import { useGetDestinationQuery, Destination } from "../../../api/jambo";
import { extractUrlJson } from "../../../lib/util";

const DestinationPage: React.FC = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);

  const query = useGetDestinationQuery({ variables: { id: router.query.key } });

  if (query.loading || !query.data) {
    return null;
  }

  const destination = query.data.destination as Destination;

  const back = extractUrlJson(router.query.back);

  return (
    <>
      <Head>
        <title>{destination.name} - Destinations - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Header
          showHomeButton={!back?.quote}
          overrideBackButton={
            back
              ? {
                  text: "Back to quote",
                  link: `/quote/${back.quote}`,
                }
              : undefined
          }
        />

        <Section container>
          <Columns>
            <Column>
              <h2 className="title is-2">{destination.name}</h2>
              <BrandLine />
              {destination.body && (
                <ReactMarkdown className="content" source={destination.body} />
              )}
            </Column>
            {destination.heroMedia && destination.heroMedia.hash && (
              <Column>
                <div className="image is-cover">
                  <Image
                    src={destination.heroMedia.hash}
                    alt={destination.name || "Image of destination"}
                  />
                </div>
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
        {isFinite(destination.latitude ?? NaN) &&
          isFinite(destination.longitude ?? NaN) && (
            <Map
              points={[
                {
                  lat: destination.latitude ?? 0,
                  lng: destination.longitude ?? 0,
                  id: destination.id,
                  type: "destination",
                  title: destination.name ?? "",
                  icon: "monument",
                },
              ]}
            />
          )}
        <Footer />
      </>
    </>
  );
};

export default withApollo({ ssr: false })(DestinationPage);
