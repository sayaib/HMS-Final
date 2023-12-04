import React from "react";
import Doctor from "../Assets/doctor-book-appointment.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

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
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> OPEN HOURS :
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Monday - Sunday : 8:00 AM - 8:00 PM
        </p>
        {/* <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Sunday : 8:00 AM - 2:00 PM
        </p> */}
        {/* <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button> */}
      </div>
    </div>
  );
}

export default BookAppointment;
