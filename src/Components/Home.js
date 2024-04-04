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

        <div className="home-text-section">
          <h1 className="primary-heading">
            Enjoy Tasty Meals, Straight to Your Plate, Always Fresh and Hot!
          </h1>

          <p className="primary-text">
            Dive into our yummy meals, made just for you and brought to your
            door, so you can enjoy every bite without waiting!
          </p>

          <button className="secondary-button">
            Order Now
            <FiArrowRight />
          </button>
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="banner_image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
