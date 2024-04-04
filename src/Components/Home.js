import React from "react";

// components
import Navbar from "./Navbar";

// assets
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";

// icons
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="home_banner_background" />
        </div>
      </div>
    </div>
  );
};

export default Home;
