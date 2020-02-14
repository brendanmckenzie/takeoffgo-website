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
  Content,
  Message,
  MessageHeader,
  MessageBody
} from "../../../components/Bulma";
import Image from "../../../components/Image";
import Map from "../../../components/Quote/components/Map";
import Footer from "../../../components/Footer";
import withData from "../../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";

const query = gql`
  query($id: UUID!) {
    property(id: $id) {
      id
      name
      city
      summary
      nearestAirport
      country {
        id
        name
      }
      latitude
      longitude
      heroMedia {
        id
        hash
      }
      gallery {
        id
        mediaGalleryItems {
          nodes {
            id
            mediaItem {
              hash
              name
            }
          }
        }
        mediaGalleriesByParentId {
          nodes {
            id
            name
            mediaGalleryItems {
              nodes {
                id
                mediaItem {
                  name
                  hash
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Property: React.FC = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);

  const data = useQuery(query, { variables: { id: router.query.key } });

  if (data.loading) {
    return (
      <Message>
        <MessageHeader>Loading...</MessageHeader>
        <MessageBody>Content loading...</MessageBody>
      </Message>
    );
  }

  return (
    <>
      <Head>
        <title>{data.data.property.name} - Properties - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Header showHomeButton />

        <Section container>
          <Columns>
            <Column>
              <h2 className="title is-2">{data.data.property.name}</h2>
              <BrandLine />
              <Content>
                <ReactMarkdown
                  className="content"
                  source={data.data.property.summary}
                />
              </Content>
            </Column>
            <Column>
              {data.data.property.heroMedia && (
                <div className="image is-cover">
                  <Image
                    src={data.data.property.heroMedia.hash}
                    alt={data.data.property.name}
                  />
                </div>
              )}
            </Column>
          </Columns>
        </Section>
        <Section container>
          <Columns>
            <Column narrow>
              <h3 className="heading">Country</h3>
              <h4 className="title">{data.data.property.country.name}</h4>
            </Column>
            <Column narrow>
              <h3 className="heading">Nearest airport</h3>
              <h4 className="title">{data.data.property.nearestAirport}</h4>
            </Column>
            <Column />
          </Columns>
        </Section>

        <Section container>
          <Columns multiline>
            {data.data.property.gallery.mediaGalleryItems.nodes.map(
              (ent: any) => (
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
              )
            )}
          </Columns>
          {data.data.property.gallery.mediaGalleriesByParentId.nodes.map(
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
            <div className="image is-cover">
              <Image src={image} />
            </div>
          )}
        </Section>
        {data.data.property.latitude && data.data.property.longitude && (
          <Map
            data={{
              properties: [
                {
                  latitude: data.data.property.latitude,
                  longitude: data.data.property.longitude,
                  id: data.data.property.id
                }
              ],
              airports: []
            }}
          />
        )}
        <Footer />
      </>
    </>
  );
};

export default withData(Property);
