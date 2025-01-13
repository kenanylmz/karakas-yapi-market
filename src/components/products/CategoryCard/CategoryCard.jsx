import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({ category }) => {
  if (!category) return null;

  const { title, description, image, products } = category;

  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-card__image" />
      <div className="category-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="category-card__products">
          {products.map((product) => (
            <div key={product.id} className="category-card__product">
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
