import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import logo from '../Assets/logo.png'
import { useNavigate } from "react-router-dom";
import NearMeIcon from '@mui/icons-material/NearMe';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Swal from 'sweetalert2';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate()

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-section ${isSticky ? "navbar-sticky" : ""}`}>
      <h1 className="navbar-title">
        <a href="#hero" >
          <img src={logo} className="navbar-sign navbar-logo" alt="Health Plus Logo" />
        </a>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <a href="#hero" className="navbar-links">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>

        <li>
          <a href="#management" className="navbar-links">
            Management
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Contact
          </a>
        </li>
        <li>
          <a href="#location" className="navbar-links">
            Location
          </a>
        </li>
      </ul>

      <div className="navbar-btn-group">
        <button className="navbar-btn navbar-icon-btn" onClick={() => {
          Swal.fire({
            html: `
            <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0053659719865!2d88.65116057530837!3d22.839290979302596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b1b0a77ce30f%3A0x886f7083db00bf8d!2sTreatment%20Solution%20Polyclinic!5e0!3m2!1sen!2sin!4v1701425746992!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
  `,
            focusConfirm: false,
            confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
          });
        }}>
          <NearMeIcon />
        </button>

        <button className="navbar-btn navbar-icon-btn" onClick={() => { navigate("/appointment") }}>
          <EmailIcon />
        </button>

        <a href="tel:+919046476855" className="navbar-btn">
          <CallIcon />
        </a>
      </div>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <a onClick={openNav} href="#hero">
              Home
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>

          <li>
            <a onClick={openNav} href="#management">
              Management
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Contact
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#location">
              Location
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
