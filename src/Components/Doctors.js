import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
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
          <span>Contact</span>
        </h3>

        <p className="dt-description dt-description-margin">
          Treatment Solution Polyclinic
          Hijalpukuria, besides Rupkatha Cinema Hall and opposite Indusland Bank Habra North 24 Parganas West Bengal. 743271
        </p>
        <p className="dt-smalldes">+91-9046476855</p>
        <p className="dt-smalldes">+91-03216 350140 - Landline</p>
        <p className="dt-smalldes">tspolyclinic.in@gmail.com</p>
        <p className="dt-smalldes">Mon - Sat : 8:00 AM - 8:00 PM</p>
        <p className="dt-smalldes dt-sunday-margin">Sunday : 8:00 AM - 2:00 PM</p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Contact Us
        </button>
      </div>

    </div >
  );
}

export default Doctors;
