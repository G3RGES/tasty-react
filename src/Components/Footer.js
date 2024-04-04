import React from "react";

// assets
import Logo from "../Assets/Logo.svg";

// icons
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="footer_logo_img" />
        </div>

        <div className="footer-icons">
          <a href="https://twitter.com/G3RGE5" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/gergesnashaat/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://www.facebook.com/gergesnashaat95"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/channel/UCfolitBLwh8mLqSA4_-b4tw"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>

        <div className="footer-section-columns">
          <span>+20 01203346582</span>
          <span>Sohag, Egypt</span>
          <span>georgios.nashaat@gmail.com</span>
        </div>

        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
