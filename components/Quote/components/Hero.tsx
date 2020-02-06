import React from "react";
import Image from "../../Image";

const Hero = ({ data }: any) => (
  <div className="columns">
    <div className="column is-3">
      <h1 className="title">{data.hero.title}</h1>
      <h2 className="subtitle">{data.hero.subtitle}</h2>
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
          {data.total > 0 && (
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
      <figure className="image is-cover">
        <Image src={data.hero.image} alt={data.hero.title} />
      </figure>
    </div>
  </div>
);

export default Hero;
