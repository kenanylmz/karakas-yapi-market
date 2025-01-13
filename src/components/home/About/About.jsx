import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./About.scss";

const About = () => {
  const { about } = promotionalContent;

  // Eğer about verisi henüz yüklenmediyse loading göster
  if (!about) return <div>Loading...</div>;

  return (
    <section className="about">
      <div
        className="about__background"
        style={{ backgroundImage: `url(${about.background})` }}
      />
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2>{about.title}</h2>
            <p className="about__description">{about.description}</p>
          </div>
          {about.features && (
            <div className="about__features">
              {about.features.map((feature, index) => (
                <div key={index} className="feature-box">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          {about.stats && (
            <div className="about__stats">
              {about.stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
