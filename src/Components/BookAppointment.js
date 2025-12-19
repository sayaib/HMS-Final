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
          <span>Why Us</span>
        </h3>
        <p className="ba-description">
          Treatment Solution Polyclinic is a premier provider of healthcare services that take a holistic approach to your wellness. Our knowledgeable staff of professionals offers general and specialized medical services, as well as a wide range of preventive care. Our comprehensive care includes comprehensive assessments, diagnosis, and treatment of a wide range of medical conditions. We also offer alternative treatments, such as acupuncture and herbal medicine, to enhance your well-being. Let us help you take control of your health today!
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} className="ba-icon-blue" /> OPEN HOURS :
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} className="ba-icon-blue" /> Monday - Sunday : 8:00 AM - 8:00 PM
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
