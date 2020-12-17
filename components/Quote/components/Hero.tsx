import React from "react";
import Image from "../../Image";
import { GetQuoteQuery } from "../../../api/jambo";

const Hero = ({ data }: { data: GetQuoteQuery }) => (
  <div className="columns">
    <div className="column is-3">
      <h1 className="title">{data.quote?.hero?.title}</h1>
      <h2 className="subtitle">{data.quote?.hero?.subtitle}</h2>
      <div className="menu is-hidden-print">
        <p className="menu-label">Sections</p>
        <ul className="menu-list">
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li className="is-hidden-mobile">
            <a href="#summarised-itinerary">Summarised itinerary</a>
          </li>
          <li className="is-hidden-mobile">
            <a href="#detailed-itinerary">Detailed itinerary</a>
          </li>
          <li className="is-hidden-tablet">
            <a href="#detailed-itinerary">Itinerary</a>
          </li>
          <li>
            <a href="#accommodation">Accommodation</a>
          </li>
          <li>
            <a href="#contact">Contact information</a>
          </li>
          {data.quote?.total > 0 && (
            <>
              <li>
                <a href="#finance">Finances</a>
              </li>
              <li>
                <a href="#terms">Terms and conditions</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
    <div className="column">
      {data.quote?.hero?.image?.hash && (
        <figure className="image is-cover">
          <Image
            src={data.quote.hero.image.hash}
            alt={data.quote.hero.title || ""}
          />
        </figure>
      )}
    </div>
  </div>
);

export default Hero;
