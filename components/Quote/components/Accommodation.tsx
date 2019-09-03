import React from "react";
import Markdown from "react-markdown";
import { mediaUrl } from "../global/helpers";
import SectionHeader from "./SectionHeader";

const Accommodation = ({ data }: any) => (
  <section id="accommodation" className="section container is-page-break">
    <SectionHeader title="Accommodation" />
    {data.properties
      .filter((ent: any) => !!ent.overview)
      .map((property: any, index: number, array: any[]) => (
        <React.Fragment key={property.id}>
          <a id={`property-${property.id}`} />
          <div className="columns avoid-page-break">
            <div className="column" style={{ order: index % 2 }}>
              <strong>{property.name}</strong>
              <Markdown className="content" source={property.overview} />
              {/* <a href="#">More information</a> */}
            </div>
            <div className="column is-3">
              <figure className="image is-16by9">
                <img
                  src={mediaUrl(property.thumbnail, {
                    width: 800,
                    height: 450
                  })}
                />
              </figure>
            </div>
          </div>
          {index + 1 !== array.length && <hr />}
        </React.Fragment>
      ))}
  </section>
);

export default Accommodation;
