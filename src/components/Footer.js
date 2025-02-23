import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <h2 className="footer-logo">
              <span className="logo-veebo">veebo</span> <span className="logo-story">Story</span>
            </h2>
            <p className="footer-text">
              Sapien luctus lusuada sentus pharetra nisi quisueo aenean eros mus magnis arcu vehicula nascetur feugiat.
            </p>
            {/* Social Media Icons */}
            <div className="footer-icons">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          {/* Services */}
          <div className="footer-section services">
            <h3>Our Services</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Write</li>
              <li>Read</li>
              <li>Activity</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Duplicate Services Section */}
          <div className="footer-section services">
            <h3>Our Services</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Write</li>
              <li>Read</li>
              <li>Activity</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact">
            <h3>Contact us</h3>
            <button className="contact-btn">Know more</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;