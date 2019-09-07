import React from "react";
import Image from "../../Image";

const Hero = ({ data }: any) => (
  <div className="columns">
    <div className="column is-3">
      <h1 className="title">{data.hero.title}</h1>
      <h2 className="subtitle">{data.hero.subtitle}</h2>
    </div>
    <div className="column">
      <Image src={data.hero.image} alt={data.hero.title} />
    </div>
  </div>
);

export default Hero;
