import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
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

        <p className="dt-description" style={{ marginBottom: "1rem" }}>
          Treatment Solution Polyclinic
          Hijalpukuria, besides Rupkatha Cinema Hall and opposite Indusland Bank Habra North 24 Parganas West Bengal. 743271
        </p>
        <p className="dt-smalldes">+91-9046476855</p>
        <p className="dt-smalldes">+91-03216 350140 - Landline</p>
        <p className="dt-smalldes">tspolyclinic.in@gmail.com</p>
        <p className="dt-smalldes">Mon - Sat : 8:00 AM - 8:00 PM</p>
        <p className="dt-smalldes" style={{ marginBottom: "1rem" }}>Sunday : 8:00 AM - 2:00 PM</p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Contact Us
        </button>
      </div>

      {/* <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Jacob Jones"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        />
      </div> */}

    </div >
  );
}

export default Doctors;
