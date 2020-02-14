import React from "react";
import Markdown from "react-markdown";
import Image from "../../Image";
import SectionHeader from "./SectionHeader";

const Accommodation = ({ data }: any) => (
  <section id="accommodation" className="section container is-page-break">
    <SectionHeader title="Accommodation" />
    <div className="columns is-multiline">
      {data.properties
        .filter((ent: any) => !!ent.overview)
        .map((property: any) => (
          <div
            id={`property-${property.id}`}
            className="column is-4"
            key={property.id}
          >
            <div className="card is-equal-height">
              <div className="card-image">
                <figure className="image is-16by9">
                  <Image src={property.thumbnail} alt={property.name} />
                </figure>
              </div>
              <div className="card-content">
                <strong><a href={`/travel/properties/${property.id}`}>{property.name}</a></strong>
                <Markdown className="content" source={property.overview} />
              </div>
            </div>
          </div>
        ))}
    </div>
  </section>
);

export default Accommodation;
