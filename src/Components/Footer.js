import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import logo from '../Assets/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <img src={logo} className="navbar-sign footer-logo" alt="Health Plus Logo" />
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Others</p>
          <ul className="ft-list-items">
            <li>
              <Link to="/legal">Terms and Conditions</Link>
            </li>
            <li>
              <a href="#guidingPrinciple">Guiding Principle</a>
            </li>
            <li>
              <a href="#staff">Staff</a>
            </li>
            <li>
              <a href="#ourValues">Our Values</a>
            </li>
            <li>
              <a href="#missionVission">Mission and Vision</a>
            </li>
            <li>
              <a href="#ourCommitment">Our Commitments</a>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">

            <li>
              <a href="mailto:tspolyclinic.in@gmail.com">
                tspolyclinic.in@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919046476855">+91-9046476855</a>
            </li>
            <li>
              <a href="tel:+9103216350140">
                +91-03216 350140</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>©{new Date().getFullYear()} Treatment Solution Polyclinic. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://www.youtube.com/@treatmentsolution"
              title="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/people/Treatment-solution/100089848560201/?mibextid=ZbWKwL"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/78.206910/?igshid=ZDdkNTZiNTM%3D"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>

        <div>
          <a
            href="https://www.instagram.com/sayaib_sarkar/"
            title="Developer Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Developed and Designed by Sayaib Sarkar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
