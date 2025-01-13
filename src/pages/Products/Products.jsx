import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sections } from "../../data/products";
import "./Products.scss";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState("satis"); // 'satis' veya 'alis'

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderImage = (src, alt) => {
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

  const renderSatisSection = () => {
    return (
      <div className="products-content">
        <div className="categories-section">
          <h2>Kategoriler</h2>
          <div className="categories-grid">
            {sections.satis.categories.map((category) => (
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
    );
  };

  const renderAlisSection = () => {
    return (
      <div className="alis-content">
        <div className="categories-grid">
          {sections.alis.categories?.map((category) => (
            <div key={category.id} className="alis-category-card">
              <div className="category-image">
                {renderImage(category.image, category.title)}
              </div>
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="details">
                  <h4>{category.details.title}</h4>
                  <p>{category.details.description}</p>
                  <div className="requirements">
                    <h5>Alım Koşulları:</h5>
                    <ul>
                      {category.details.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="brands">
                    <h5>Çalıştığımız Markalar:</h5>
                    <ul>
                      {category.details.brands.map((brand, index) => (
                        <li key={index}>{brand}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/contact" className="contact-button">
                  İletişime Geç
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1>Ürünlerimiz</h1>
        <div className="section-tabs">
          <button
            className={`tab-button ${
              activeSection === "satis" ? "active" : ""
            }`}
            onClick={() => setActiveSection("satis")}
          >
            Satış
          </button>
          <button
            className={`tab-button ${activeSection === "alis" ? "active" : ""}`}
            onClick={() => setActiveSection("alis")}
          >
            Alış
          </button>
        </div>
        {activeSection === "satis" ? renderSatisSection() : renderAlisSection()}
      </div>
    </div>
  );
};

export default Products;
