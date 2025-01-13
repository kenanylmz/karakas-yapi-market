import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./Features.scss";

const Features = () => {
  const { features } = promotionalContent;

  return (
    <section className="features">
      <div className="container">
        <h2>{features.title}</h2>
        <div className="features__grid">
          {features.items.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card__image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
