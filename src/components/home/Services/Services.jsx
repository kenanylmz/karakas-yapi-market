import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./Services.scss";

const Services = () => {
  const { services } = promotionalContent;

  if (!services) return <div>Loading...</div>;

  return (
    <section className="services">
      <div
        className="services__background"
        style={{ backgroundImage: `url(${services.background})` }}
      />
      <div className="container">
        <div className="services__content">
          <h2>{services.title}</h2>
          <p className="section-description">{services.description}</p>
          <div className="services__grid">
            {services.items.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-hover">
                    <span className="learn-more">Detaylı Bilgi →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
