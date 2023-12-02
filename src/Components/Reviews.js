import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import SolutionStep from "./SolutionStep";
import management from '../Assets/Images/management.png'


function Reviews() {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <div className="about-section" id="management" style={{ marginBottom: "2rem" }}>
      <div className="about-image-content">
        <img src={management} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content" style={{ marginTop: "-0.5rem" }}>
        <h3 className="about-title">
          <span>Management</span>
        </h3>
        <p className="about-description" style={{ fontWeight: "600" }}>PROPRIETOR</p>
        <p className="about-description" style={{ fontWeight: "600", fontSize: "2rem" }}>
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
