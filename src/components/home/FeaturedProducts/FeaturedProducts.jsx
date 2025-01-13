import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../data/products";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  // Her kategoriden ilk ürünü al
  const featuredProducts = categories.map((category) => ({
    ...category.products[0],
    category: category.title,
  }));

  return (
    <section className="featured-products">
      <div className="container">
        <h2>Öne Çıkan Ürünlerimiz</h2>
        <div className="featured-products__grid">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card__content">
                <span className="category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link
                  to={`/products#${product.category}`}
                  className="product-card__link"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-products__action">
          <Link to="/products" className="btn-primary">
            Tüm Ürünlerimizi İnceleyin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
