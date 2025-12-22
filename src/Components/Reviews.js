import React from "react";
import "../Styles/Reviews.css";
import management from '../Assets/Images/management.png'


function Reviews() {
  return (
    <div className="about-section management-margin-bottom" id="management">
      <div className="about-image-content">
        <img src={management} alt="Management Team" className="about-image1" loading="lazy" decoding="async" />
      </div>

      <div className="about-text-content management-margin-top">
        <h3 className="about-title">
          <span>Management</span>
        </h3>
        
        <div className="management-card">
          <div className="management-header">
            <p className="management-role">PROPRIETOR</p>
            <h4 className="management-name">
              Prithish Kumar Dey / Geetali Dey
            </h4>
          </div>
          
          <div className="management-body">
            <p className="about-description">
              Treatment Solution polyclinic is formed by a team highly skilled and experience personals having a common vision of contributing in the Health Sector thereby impacting lives of common man. The Company is owned by a person holding an experience of more than 20+ years in the Health care business.
            </p>

            <p className="about-description">
              Our doctors team having a common mission to improve lives of our clients/patients by ensuring safe and sound health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Reviews);
