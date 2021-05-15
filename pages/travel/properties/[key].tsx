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
import { useGetPropertyQuery, Property } from "../../../api/jambo";
import { extractUrlJson } from "../../../lib/util";

const PropertyPage: React.FC = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);

  const query = useGetPropertyQuery({ variables: { id: router.query.key } });

  if (query.loading || !query.data) {
    return null;
  }

  const property = query.data.property as Property;

  const back = extractUrlJson(router.query.back);

  return (
    <>
      <Head>
        <title>{property.name} - Properties - Take Off Go</title>
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
              <h2 className="title is-2">{property.name}</h2>
              <BrandLine />
              {property.summary && (
                <ReactMarkdown className="content">
                  {property.summary}
                </ReactMarkdown>
              )}
            </Column>
            <Column>
              {property.heroMedia && property.heroMedia.hash && (
                <div className="image is-cover">
                  <Image
                    src={property.heroMedia.hash}
                    alt={property.name || "Image of property"}
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
              <h4 className="title">{property.country?.name}</h4>
            </Column>
            <Column narrow>
              <h3 className="heading">Nearest airport</h3>
              <h4 className="title">{property.nearestAirport}</h4>
            </Column>
            <Column />
          </Columns>
        </Section>

        <Section container>
          <Columns multiline>
            {property.gallery?.mediaGalleryItems.nodes.map((ent: any) => (
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
          {property.gallery?.mediaGalleriesByParentId.nodes.map((ent: any) => (
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
          ))}
          {image && (
            <div className="image is-cover is-hidden-mobile">
              <Image src={image} />
            </div>
          )}
        </Section>
        {property.latitude && property.longitude && (
          <Map
            points={[
              {
                lat: property.latitude,
                lng: property.longitude,
                id: property.id,
                icon: "hotel",
                title: property.name || "",
                body: property.summary || "",
                type: "property",
              },
            ]}
          />
        )}
        <Footer />
      </>
    </>
  );
};

export default withApollo({ ssr: false })(PropertyPage);
