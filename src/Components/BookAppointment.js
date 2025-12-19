import React from "react";
import Doctor from "../Assets/doctor-book-appointment.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Us</span>
        </h3>
        <p className="ba-description">
          Treatment Solution Polyclinic is a premier provider of healthcare services that take a holistic approach to your wellness. Our knowledgeable staff offers general and specialized medical services, as well as a wide range of preventive care.
        </p>

        <div className="ba-features">
          <div className="ba-feature-item">
            <FontAwesomeIcon icon={faCircleCheck} className="ba-feature-icon" />
            <span>Comprehensive Assessments & Diagnosis</span>
          </div>
          <div className="ba-feature-item">
            <FontAwesomeIcon icon={faCircleCheck} className="ba-feature-icon" />
            <span>Alternative Treatments (Acupuncture, Herbal)</span>
          </div>
          <div className="ba-feature-item">
            <FontAwesomeIcon icon={faCircleCheck} className="ba-feature-icon" />
            <span>Personalized Wellness Plans</span>
          </div>
        </div>

        <div className="ba-schedule-card">
          <div className="ba-schedule-header">
            <FontAwesomeIcon icon={faCircleCheck} className="ba-schedule-icon" />
            <h4>Open Hours</h4>
          </div>
          <p className="ba-schedule-time">Monday - Sunday</p>
          <p className="ba-schedule-hours">8:00 AM - 8:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
