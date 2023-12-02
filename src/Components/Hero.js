import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";
import ContactForm from "./ContactForm";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container" id="hero">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline" style={{ color: "white" }}>❤️ Health comes first</p>
          <h2 className="text-title" style={{ color: "white" }}>
            TS POLYCLINIC
          </h2>
          <h3 className="text-title" style={{ fontSize: "1rem", color: "white" }}>
            A SINGLE DOORWAY TO MULTISPECIALITY CARE
          </h3>
          <br />
          <p className="text-descritpion" style={{ color: "white" }}>
            We care because we love to serve humanity. It’s not just our duty but a passion to serve you. Serving humanity gives peace to our souls. We feel peace inside when we worked for your health.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Contact Us
          </button>
          {/* <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div> */}
        </div>


        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />

        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
