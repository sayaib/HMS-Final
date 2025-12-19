import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import logo from '../Assets/Images/logo.png'

function AppointmentForm() {
  const form = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_hibzs9r",
        "template_ik8c1fi",
        form.current,
        "cvnvMvad3_pdZxpHj"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Sent!", "Email sent successfully", "success");
          setPatientName("");
          setPatientNumber("");
          setPatientEmail("");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire("Error!", "Something went wrong. Please try again.", "error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          <img src={logo} className="navbar-sign appointment-logo" alt="Health Plus Logo" />
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Contact Us</span>
        </h2>

        <form ref={form} className="form-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user_name">Name:</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_number">Phone Number:</label>
            <input
              type="tel"
              id="user_number"
              name="user_number"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email Address:</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="appointment-textarea"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button type="submit" className="text-appointment-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
