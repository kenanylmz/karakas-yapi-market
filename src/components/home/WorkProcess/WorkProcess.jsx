import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./WorkProcess.scss";

const WorkProcess = () => {
  const { howItWorks } = promotionalContent;

  return (
    <section className="work-process">
      <div className="container">
        <h2>{howItWorks.title}</h2>
        <div className="work-process__steps">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
