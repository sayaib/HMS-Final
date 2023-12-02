import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import logo from '../Assets/Images/logo.png'

function AppointmentForm() {

  const form = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");

  const [appointmentTime, setPatientMail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );

  };


  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          <img src={logo} style={{ width: "8rem", marginTop: "0.85rem" }} alt="" srcset="" className="navbar-sign" />


        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Contact US</span>
        </h2>

        <form ref={form} className="form-content" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="user_name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />

          </label>

          <br />
          <label>
            Number:
            <input
              type="text"
              name="user_number"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />

          </label>




          <br />
          <label>
            Email:
            <input
              type="mail"
              name="user_email"
              value={appointmentTime}
              onChange={(e) => setPatientMail(e.target.value)}
              required
            />

          </label>

          <br />
          <label>
            Message:
            <textarea name="message" id="" style={{ color: "black", background: "#C9DEF4" }} required></textarea>
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Send
          </button>

        </form>
      </div>



      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
