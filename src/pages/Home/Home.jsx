import React from "react";
import Hero from "../../components/home/Hero/Hero";
import AboutSection from "../../components/home/AboutSection/AboutSection";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
