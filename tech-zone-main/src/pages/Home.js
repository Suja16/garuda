import React, { useRef } from "react";
import Slider from "../components/Slider";
import Features from "../components/Features";
import "../components/Home.css";
import StayUpdated from "../components/StayUpdated";
import PopularCategories from "../components/PopularCategories";
import AboutUs from "../components/AboutUs";

const Home = () => {

  return (
    <div className="home">
      <Slider />
      <h1  className="centered-h1">About Us</h1>
      <AboutUs/>
      <h1 id="popular-categories" className="centered-h1">Popular Categories</h1>
      <PopularCategories/>
      <h1 id="features" className="centered-h1">Our Services</h1>
      <Features />
      <h1 className="centered-h1">Stay Updated With us</h1>
      <StayUpdated/>
      

    </div>
  );
};

export default Home;
