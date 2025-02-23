import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/GetInTouch.css"; 

import heroBg from "../assets/image 5.png";
import heroImg1 from "../assets/image 6.png";
import heroImg2 from "../assets/image 3.png";

import feature1 from "../assets/image 9.png";
import feature2 from "../assets/image 9-1.png";
import feature3 from "../assets/image 9-2.png";

import story1 from "../assets/image 14.png";
import story2 from "../assets/image 14-1.png";
import story3 from "../assets/image 14-2.png";
import story4 from "../assets/image 14-3.png";

// import planImage from "../assets/Group 46.png";

import plan1 from "../assets/image 13.png";
import plan2 from "../assets/image 12.png";
import plan3 from "../assets/image 13.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
<section className="hero-section">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-md-6">
        <h1 className="hero-title">Get better at writing!</h1>
        <p className="hero-text">
          Helping young writers make cool stories with awesome pictures. 
          Storybird’s art-inspired writing makes learning fun!
        </p>
        <button className="btn hero-btn">Join now</button>
      </div>

      {/* Right Image Area */}
      <div className="col-md-6 d-flex justify-content-center">
        <div className="hero-images">
          <img src={heroImg1} alt="Kid playing" className="hero-img hero-img1" />
          <img src={heroImg2} alt="Kids learning" className="hero-img hero-img2" />
        </div>
      </div>
    </div>
  </div>

  {/* Purple Dripping Effect */}
  <div className="hero-drip"></div>
</section>

     {/* Features Section */}
<section className="features-section text-center p-5">
  <h2 className="features-title">Get Started</h2>
  <div className="container">
    <div className="row justify-content-center">
      {/* Feature Cards */}
      <div className="col-md-4">
        <div className="feature-card">
          <img src={feature1} alt="Choose an Illustration" className="feature-img" />
          <h4 className="feature-heading">Choose an illustration</h4>
          <p className="feature-text">Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-card feature-active">
          <img src={feature2} alt="Write your Story" className="feature-img" />
          <h4 className="feature-heading">Write your story</h4>
          <p className="feature-text">Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-card">
          <img src={feature3} alt="Publish your Story" className="feature-img" />
          <h4 className="feature-heading">Publish your story</h4>
          <p className="feature-text">Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.</p>
        </div>
      </div>
    </div>

    {/* Try It Now Button */}
    <button className="btn try-btn mt-4">Try it now</button>
  </div>
</section>

      {/* Stories Section */}
<section className="stories-section text-center p-5">
  <p className="stories-subtitle">Read Stories</p>
  <h2 className="stories-title">Take a look & Start Learning From Today</h2>

  <div className="container">
    <div className="row">
      {[story1, story2, story3, story4, story1, story2, story3, story4].map((story, index) => (
        <div className="col-md-3" key={index}>
          <div className="story-card">
            <img src={story} alt={`Story ${index + 1}`} className="img-fluid story-img" />
            <h5 className="story-name">Story Name</h5>
            <p className="story-text">Interactively brand client center through its customized value good ideas.</p>
            <button className="btn btn-warning story-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>

  <button className="btn explore-btn mt-4">Explore More</button>
</section>

      {/* Pricing Section */}
    <section className="pricing-section">
      <div className="container text-center">
        <p className="pricing-title">Pricing</p>
        <h2 className="pricing-heading">
          Our subscription plans for you that we provide!
        </h2>
        
        <div className="row justify-content-center">
          {/* Top Row */}
          <div className="col-md-5 pricing-card">
            <img src={plan1} alt="Basic Plan" className="pricing-img" />
            <h5 className="pricing-plan-title">Basic Individual Plan</h5>
            <p className="pricing-text">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </p>
            <a href="#" className="pricing-link">Know more →</a>
          </div>

          <div className="col-md-5 pricing-card">
            <img src={plan2} alt="Premium Plan" className="pricing-img" />
            <h5 className="pricing-plan-title">Premium Individual Plan</h5>
            <p className="pricing-text">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </p>
            <a href="#" className="pricing-link">Know more →</a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row justify-content-center">
          <div className="col-md-5 pricing-card">
            <img src={plan3} alt="School Plan" className="pricing-img" />
            <h5 className="pricing-plan-title">School Plan</h5>
            <p className="pricing-text">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </p>
            <a href="#" className="pricing-link">Know more →</a>
          </div>
        </div>

        {/* Explore More Button */}
        <button className="btn explore-btn">Explore more</button>
      </div>
    </section>


    <section className="get-in-touch-container">
      <div className="container text-center">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2 className="section-title">Needs Help? Let's Get in Touch</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur. Blandit leo elementum velit
          risus cras id consectetur. Volutpat et pretium sapien tristique lacus.
          Non posuere massa at semper maecenas ante sed id. Sit nulla dignissim
          dolor sed in vitae. Eu metus feugiat justo.
        </p>
        <button className="btn btn-primary custom-btn">Know more</button>
      </div>

      {/* Stars Decorations */}
      <div className="stars left-stars">
        <span>⭐</span> <span>⭐</span> <span>⭐</span> <span>⭐</span>
      </div>
      <div className="stars right-stars">
        <span>⭐</span> <span>⭐</span> <span>⭐</span>
      </div>
    </section>

      {/* Contact Section */}
      <section className="text-center p-5 bg-warning">
        <h2>Needs Help? Let's Get in Touch</h2>
        <p>Contact us for more information.</p>
        <button className="btn btn-dark">Know More</button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;