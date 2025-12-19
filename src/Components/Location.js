import React from 'react'
import "../Styles/Location.css";

const Location = () => {
    return (
        <div className="doctor-section" id="location">
            <div className="dt-title-content">
                <h3 className="dt-title">
                    <span>Location</span>
                </h3>
                <br />
                <br />
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0053659719865!2d88.65116057530837!3d22.839290979302596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b1b0a77ce30f%3A0x886f7083db00bf8d!2sTreatment%20Solution%20Polyclinic!5e0!3m2!1sen!2sin!4v1701425746992!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="location-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div >
    )
}

export default Location;
