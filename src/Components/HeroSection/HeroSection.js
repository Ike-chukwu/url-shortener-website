import React from "react";
import Img from "../../images/illustration-working.svg";
import './HeroSection.css'


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1>More than just <br /> shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="" className="btn">
            Get Started
          </a>
      </div>

      <div className="image">
        <img src={Img} alt="" />
      </div>

    </section>
  );
};

export default HeroSection;
