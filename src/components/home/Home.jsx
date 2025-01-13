import React from "react";
import Hero from "./Hero/Hero";
import MainFeatures from "./MainFeatures/MainFeatures";
import ProductCategories from "./ProductCategories/ProductCategories";
import Services from "./Services/Services";
import About from "./About/About";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <MainFeatures />
      <ProductCategories />
      <Services />
      <About />
      <SpecialOffers />
    </div>
  );
};

export default Home;
