import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"
import "../Styles/Doctors.css";

function Doctors() {

  const navigate = useNavigate();
  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Get in Touch</span>
        </h3>
        <p className="dt-description">
          We are here to assist you. Reach out to us for any queries or to schedule an appointment.
        </p>
      </div>

      <div className="contact-grid">
        {/* Address Card */}
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
          </div>
          <h4>Visit Us</h4>
          <p>Treatment Solution Polyclinic</p>
          <p>Hijalpukuria, besides Rupkatha Cinema Hall</p>
          <p>Habra, North 24 Parganas, WB 743271</p>
        </div>

        {/* Phone Card */}
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          </div>
          <h4>Call Us</h4>
          <p>+91-9046476855</p>
          <p>+91-03216 350140 (Landline)</p>
        </div>

        {/* Email Card */}
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          </div>
          <h4>Email Us</h4>
          <p>tspolyclinic.in@gmail.com</p>
          <p className="invisible-text">.</p>
        </div>

        {/* Hours Card */}
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <FontAwesomeIcon icon={faClock} className="contact-icon" />
          </div>
          <h4>Working Hours</h4>
          <p>Mon - Sat : 8:00 AM - 8:00 PM</p>
          <p>Sunday : 8:00 AM - 2:00 PM</p>
        </div>
      </div>

      <div className="contact-action">
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>

    </div >
  );
}

export default Doctors;
