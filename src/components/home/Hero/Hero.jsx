import React from "react";
import { Link } from "react-router-dom";
import { promotionalContent } from "../../../data/promotional";
import "./Hero.scss";

const Hero = () => {
  const { hero } = promotionalContent;

  return (
    <section className="hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${hero.image})` }}
      />
      <div className="container">
        <div className="hero__content">
          <h1>{hero.title}</h1>
          <p className="hero__description">{hero.description}</p>
          <p className="hero__sub-description">{hero.subDescription}</p>
          <Link to="/products" className="hero__cta">
            Ürünlerimizi İnceleyin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
