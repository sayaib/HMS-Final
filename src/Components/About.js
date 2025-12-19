import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Treatment Solution Polyclinic is committed to providing quality care and personalized attention to our patients. Our team of highly skilled professionals offer specialized treatments and services to those in need of medical attention. We are dedicated to ensuring you receive only the best care available.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <div className="about-steps-grid">
          <SolutionStep
            title="Choose a Specialist"
            description="Find your perfect specialist and book with ease at TS POLYCLINIC. Expert doctors prioritize your health, offering tailored care."
          />

          <SolutionStep
            title="Make a Schedule"
            description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being."
          />
        </div>
      </div>
    </div>
  );
}

export default About;
