import React from "react";
import Markdown from "react-markdown";
import Image from "../../Image";
import SectionHeader from "./SectionHeader";
import { GetQuoteQuery } from "../../../lib/graphql";
import { LinkButton } from "../../Bulma";
import _ from "lodash";

const Accommodation = ({ data }: { data: GetQuoteQuery }) => (
  <section id="accommodation" className="section container is-page-break">
    <SectionHeader title="Accommodation" />
    <div className="columns is-multiline is-centered">
      {_(data.quote?.accommodation?.nodes.map(a => a?.property))
        .uniqBy("id")
        .value()
        .filter(ent => !!ent?.summary)
        .map(property => (
          <div
            id={`property-${property?.id}`}
            className="column is-4"
            key={property?.id}
          >
            <div className="card">
              {property?.heroMedia?.hash && (
                <div className="card-image">
                  <a
                    className="image is-16by9"
                    href={`/travel/properties/${property?.id}`}
                  >
                    <Image
                      src={property.heroMedia.hash}
                      alt={property.name || ""}
                    />
                  </a>
                </div>
              )}
              <div className="card-content">
                <strong>{property?.name}</strong>
                {property?.summary && (
                  <Markdown className="content" source={property?.summary} />
                )}
                <hr />
                <div className="buttons is-right">
                  <LinkButton
                    text
                    iconRight="chevron-right"
                    href={`/travel/properties/${property?.id}`}
                  >
                    Read more
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </section>
);

export default Accommodation;
