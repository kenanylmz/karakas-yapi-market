import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./CampaignSection.scss";

const CampaignSection = () => {
  const { campaigns, slogan } = promotionalContent;

  return (
    <section className="campaign-section">
      <div className="container">
        <div className="campaign-section__content">
          <div className="campaign-section__text">
            <h2>{campaigns.title}</h2>
            <p>{campaigns.description}</p>
            <div className="slogan">{slogan}</div>
          </div>
          <div className="campaign-section__image">
            <img src={campaigns.image} alt="Kampanyalar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
