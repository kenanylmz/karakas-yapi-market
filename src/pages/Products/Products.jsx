import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import "./Products.scss";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Debug için ekleyelim
  console.log("Products:", products);
  console.log("Categories:", products.categories);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderImage = (src, alt) => {
    console.log("Loading image:", src);
    return (
      <img
        src={src}
        alt={alt}
        onError={(e) => console.error("Image load error:", src)}
      />
    );
  };

  const renderProductDetails = (product) => {
    return (
      <div className="product-details">
        <div className="product-details__image">
          {renderImage(product.image, product.name)}
        </div>
        <div className="product-details__content">
          <h3>{product.name}</h3>
          <p className="description">{product.description}</p>
          <div className="specifications">
            {Object.entries(product.details).map(([key, value]) => {
              if (key !== "features") {
                return (
                  <div key={key} className="spec-item">
                    <span className="label">{key}:</span>
                    <span className="value">{value}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="features">
            <h4>Özellikler</h4>
            <ul>
              {product.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <Link to="/contact" className="inquiry-button">
            Fiyat Sorun
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1>Ürünlerimiz</h1>
        {!products.categories && <p>Kategoriler yüklenemedi!</p>}
        <div className="products-content">
          <div className="categories-section">
            <h2>Kategoriler</h2>
            <div className="categories-grid">
              {products.categories?.map((category) => (
                <div
                  key={category.id}
                  className={`category-card ${
                    selectedCategory?.id === category.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="category-image">
                    {renderImage(category.image, category.title)}
                  </div>
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedCategory && (
            <div className="products-section">
              <h2>{selectedCategory.title}</h2>
              <div className="products-grid">
                {selectedCategory.products.map((product) => (
                  <div
                    key={product.id}
                    className={`product-card ${
                      selectedProduct?.id === product.id ? "active" : ""
                    }`}
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="product-image">
                      {renderImage(product.image, product.name)}
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedProduct && (
            <div className="product-details-section">
              {renderProductDetails(selectedProduct)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
