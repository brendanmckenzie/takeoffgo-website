import React from "react";
import { mediaUrl } from "../global/helpers";

const Hero = ({ data }: any) => (
  <div className="columns">
    <div className="column is-3">
      <h1 className="title">{data.hero.title}</h1>
      <h2 className="subtitle">{data.hero.subtitle}</h2>
    </div>
    <div className="column">
      <section
        className={["hero", "is-large", data.hero.style].join(" ")}
        style={{
          backgroundImage: `url("${mediaUrl(data.hero.image, {
            width: 2000,
            height: 1000
          })}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      >
        <div className="hero-body"></div>
      </section>
    </div>
  </div>
);

export default Hero;
