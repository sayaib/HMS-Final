import React from "react";
import "../Styles/Reviews.css";
import management from '../Assets/Images/management.png'


function Reviews() {
  return (
    <div className="about-section management-margin-bottom" id="management">
      <div className="about-image-content">
        <img src={management} alt="Management Team" className="about-image1" />
      </div>

      <div className="about-text-content management-margin-top">
        <h3 className="about-title">
          <span>Management</span>
        </h3>
        <p className="about-description management-role">PROPRIETOR</p>
        <p className="about-description management-name">
          Prithish Kumar Dey / Geetali Dey
        </p>
        <p className="about-description">
          Treatment Solution polyclinic is formed by a team highly skilled and experience personals having a common vision of contributing in the Health Sector thereby impacting lives of common man. The Company is owned by a person holding an experience of more than 20+ years in the Health care business.
        </p>

        <p className="about-description">
          Our doctors team having a common mission to improve lives of our clients/patients by ensuring safe and sound health.
        </p>
      </div>
    </div>
  );
}

export default Reviews;
