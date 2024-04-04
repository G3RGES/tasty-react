import React from "react";

// assets
import ProfilePic from "../Assets/john-doe-image.png";

// icons
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Discover what our satisfied customers are saying about their dining
          experiences with us. From rave reviews to glowing testimonials, find
          out why they keep coming back for more.
        </p>
      </div>

      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="testimonial_user_profile_img" />
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
        <span className="primary-text">"Best Food"</span>
      </div>
    </div>
  );
};

export default Testimonial;
