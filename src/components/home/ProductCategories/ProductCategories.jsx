import React from "react";
import { Link } from "react-router-dom";
import { promotionalContent } from "../../../data/promotional";
import "./ProductCategories.scss";

const ProductCategories = () => {
  const { productCategories } = promotionalContent;

  if (!productCategories) return <div>Loading...</div>;

  return (
    <section className="product-categories">
      <div
        className="product-categories__background"
        style={{ backgroundImage: `url(${productCategories.background})` }}
      />
      <div className="container">
        <div className="product-categories__content">
          <h2>{productCategories.title}</h2>
          <p className="section-description">{productCategories.description}</p>
          <div className="product-categories__grid">
            {productCategories.categories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>{category.title}</h3>
                <ul className="category-items">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Link
                  to={`/products#${category.title}`}
                  className="category-link"
                >
                  Tüm Ürünleri Gör →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
