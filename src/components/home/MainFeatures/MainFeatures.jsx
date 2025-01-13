import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./MainFeatures.scss";

const MainFeatures = () => {
  const { mainFeatures } = promotionalContent;

  if (!mainFeatures) return <div>Loading...</div>;

  return (
    <section className="main-features">
      <div
        className="main-features__background"
        style={{ backgroundImage: `url(${mainFeatures.background})` }}
      />
      <div className="container">
        <div className="main-features__content">
          <h2>{mainFeatures.title}</h2>
          <p className="section-description">{mainFeatures.description}</p>
          <div className="main-features__grid">
            {mainFeatures.items.map((item, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
