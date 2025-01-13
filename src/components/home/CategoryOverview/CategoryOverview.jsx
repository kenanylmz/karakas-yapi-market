import React from "react";
import { Link } from "react-router-dom";
import { promotionalContent } from "../../../data/promotional";
import "./CategoryOverview.scss";

const CategoryOverview = () => {
  const { categories } = promotionalContent;

  return (
    <section className="category-overview">
      <div className="container">
        <h2>{categories.title}</h2>
        <p className="section-description">{categories.description}</p>

        <div className="category-overview__grid">
          {categories.items.map((category, index) => (
            <div key={index} className="category-card">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <Link
                to={`/products#${category.title}`}
                className="category-link"
              >
                İncele →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryOverview;
