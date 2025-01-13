import React from "react";
import { categories } from "../../../data/products";
import "./ProductCategory.scss";

const ProductCategory = ({ categoryId, isActive }) => {
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) return null; // Kategori bulunamazsa null döndür

  return (
    <div className={`product-category ${isActive ? "active" : ""}`}>
      <h2>{category.title}</h2>
      <p className="product-category__description">{category.description}</p>

      <div className="product-category__grid">
        {category.products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-item__image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-item__content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul className="product-item__features">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
