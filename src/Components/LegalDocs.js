import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import logo from '../Assets/logo.png';

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const legalContent = [
    {
      id: "intro",
      title: "1. Introduction",
      content: `Welcome to Treatment Solution Polyclinic ("we," "our," or "us"). By accessing and using our website www.treatmentsolution.in, booking appointments, or utilizing our services, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.`
    },
    {
      id: "services",
      title: "2. Services Provided",
      content: `We offer medical consultations, diagnostic services, and healthcare treatments as per our listed services. The availability of specific services may vary, and we reserve the right to modify or discontinue any service at our discretion.`
    },
    {
      id: "appointments",
      title: "3. Appointments and Cancellations",
      content: `Appointments can be booked online, via phone, or in person. Patients are required to arrive on time for scheduled appointments. No cancellations are allowed; however, appointment dates may be rescheduled if notified at least 24 hours in advance of the original schedule.`
    },
    {
      id: "disclaimer",
      title: "4. Medical Disclaimer",
      content: `The content on our website is for informational purposes only and should not be considered medical advice. Our healthcare professionals provide medical consultations based on the information you provide; however, we do not guarantee specific results. In case of a medical emergency, please call emergency services or visit the nearest hospital immediately.`
    },
    {
      id: "payment",
      title: "5. Payment and Refund Policy",
      content: `Payments for consultations and treatments must be made at the time of service unless otherwise agreed. We only accept payments via Cash and UPI. Refunds are only applicable in cases where services were not provided due to clinic unavailability or unforeseen circumstances. Partial refunds, if applicable, will be processed on a case-by-case basis.`
    },
    {
      id: "privacy",
      title: "6. Privacy and Data Protection",
      content: `We collect and store personal information for future reference, including your name, date of birth, blood group, prescriptions, and past consultations conducted at Treatment Solution Polyclinic. Your medical records will be securely stored in compliance with applicable Indian Data Protection Laws and will only be shared with third parties if legally required or with your explicit consent. For more details, please refer to our Privacy Policy.`
    },
    {
      id: "conduct",
      title: "7. Code of Conduct",
      content: `Patients and visitors must maintain respectful behavior towards staff and other patients. Any form of harassment, violence, or inappropriate conduct will result in refusal of service and potential legal action.`
    },
    {
      id: "ip",
      title: "8. Intellectual Property",
      content: `All website content, including text, graphics, logos, and images, is the property of Treatment Solution Polyclinic and may not be reproduced or used without permission.`
    },
    {
      id: "liability",
      title: "9. Limitation of Liability",
      content: `While we strive to provide the best medical care, we do not guarantee the accuracy or effectiveness of treatments. We are not liable for any damages, injuries, or losses arising from the use of our services, except in cases of proven medical negligence.`
    },
    {
      id: "changes",
      title: "10. Changes to Terms",
      content: `We reserve the right to modify these Terms and Conditions at any time. Any updates will be posted on this page, and continued use of our services constitutes acceptance of the revised terms.`
    },
    {
      id: "law",
      title: "11. Governing Law",
      content: `These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Barasat (District Court), WB - 700124.`
    }
  ];

  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link to="/" className="legal-logo-link">
          <img src={logo} className="legal-logo" alt="Health Plus Logo" />
        </Link>
        <h1 className="legal-main-title">Terms and Conditions</h1>
        <p className="legal-last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <div className="legal-container">
        <aside className="legal-sidebar">
          <nav className="legal-nav">
            <p className="legal-nav-title">Table of Contents</p>
            <ul>
              {legalContent.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
              <li><a href="#contact">12. Contact Us</a></li>
            </ul>
          </nav>
        </aside>

        <main className="legal-content">
          {legalContent.map((item) => (
            <section id={item.id} key={item.id} className="legal-section">
              <h2 className="legal-section-title-text">{item.title}</h2>
              <p className="legal-description">{item.content}</p>
            </section>
          ))}
          
          <section id="contact" className="legal-section contact-section">
            <h2 className="legal-section-title-text">12. Contact Us</h2>
            <p className="legal-description">
              For any queries regarding these Terms and Conditions, please contact us at:
            </p>
            <address className="legal-address">
              <strong>Email:</strong> <a href="mailto:tspolyclinic.in@gmail.com">tspolyclinic.in@gmail.com</a><br />
              <strong>Address:</strong> Rupkatha Cinema Hall, Hijalpukuria, besides and opposite Indusind Bank, Habra, West Bengal 743271<br />
              <strong>Phone:</strong> <a href="tel:+919046476855">+91 9046476855</a>
            </address>
          </section>
        </main>
      </div>

      <footer className="legal-footer">
        <p>© {new Date().getFullYear()} Treatment Solution Polyclinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LegalDocs;
