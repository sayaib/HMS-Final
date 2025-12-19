import React from 'react'
import guiding from '../Assets/Images/guiding.png'
import staff from '../Assets/Images/staff.jpg'
import value from '../Assets/Images/values.jpg'
import mission from '../Assets/Images/mission.jpeg'
import commitment from '../Assets/Images/commitment.jpg'
import "../Styles/Others.css";

const Others = () => {
    return (
        <>
            <div className="others-margin">
                <div className="ba-section" id="guidingPrinciple">
                    <div className="about-image-content">
                        <img src={guiding} alt="Guiding Principles" className="about-image1" />
                    </div>
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>Guiding Principle</span>
                        </h3>
                        <p className="about-description">
                            There are our mantra to server the humanity at its fullest using our experienced personals in Management and doctors team:
                        </p>
                        <div className="guiding-principles-container">
                            <div className="principle-card">
                                <div className="principle-number">01</div>
                                <div className="principle-text">Trust</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-number">02</div>
                                <div className="principle-text">Transparency</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-number">03</div>
                                <div className="principle-text">Mutual Respect</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-number">04</div>
                                <div className="principle-text">Win / Win situation</div>
                            </div>
                            <div className="principle-card">
                                <div className="principle-number">05</div>
                                <div className="principle-text">Long Term Commitment</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* -------------------- */}


                <div className="about-section" id="staff">
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>STAFF</span>
                        </h3>
                        <div className="staff-content-card">
                            <p className="about-description">
                                Our experienced team of medical professionals is dedicated to providing quality care with a personalized patient experience. We are committed to providing safe and reliable treatments which will best suit each patient's needs. We are here to help you get back to feeling your best.
                            </p>
                        </div>
                    </div>
                    <div className="about-image-content">
                        <img src={staff} alt="Staff" className="about-image1 staff-image-styled" />
                    </div>
                </div>

                {/* ------ */}

                <div className="ba-section" id="ourValues">
                    <div className="about-image-content">
                        <img src={value} alt="Our Values" className="about-image1 values-image-styled" />
                    </div>
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>OUR VALUES</span>
                        </h3>
                        <p className="about-description">
                            Treatment Solution Polyclinic treats all patients, visitor’s and one another with compassion and respect, work as a team to provide quality care and services to patients and contribute to ongoing improvement and excellence we do.
                        </p>
                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-icon">❤️</div>
                                <div className="value-text">Compassion & Respect</div>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">🤝</div>
                                <div className="value-text">Teamwork</div>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">⭐</div>
                                <div className="value-text">Quality Care</div>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">📈</div>
                                <div className="value-text">Continuous Improvement</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------ */}



                <div className="about-section" id="missionVission">
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>MISSION & VISION</span>
                        </h3>
                        
                        <div className="mv-container">
                            <div className="mv-card">
                                <div className="mv-header">
                                    <div className="mv-icon">👁️</div>
                                    <h4>Vision</h4>
                                </div>
                                <p>Awarding everyone with all the health care issues</p>
                            </div>
                            <div className="mv-card">
                                <div className="mv-header">
                                    <div className="mv-icon">🚀</div>
                                    <h4>Mission</h4>
                                </div>
                                <p>Providing reliable health care facilities for all common man</p>
                            </div>
                        </div>

                    </div>

                    <div className="about-image-content">
                        <img src={mission} alt="Mission and Vision" className="about-image1 mission-image-styled" />
                    </div>

                </div>

                {/* ------ */}



                <div className="ba-section" id="ourCommitment">

                    <div className="about-image-content">
                        <img src={commitment} alt="Our Commitment" className="about-image1 commitment-image-styled" />
                    </div>
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>OUR COMMITMENTS</span>
                        </h3>
                        <p className="about-description">
                            The Company’s name and logo reflects the nature of the company and its commitment to serve its clients/patients. We strive to bring preventive care in the forefront.
                        </p>
                        
                        <div className="commitment-grid">
                            <div className="commitment-card">
                                <div className="commitment-icon-wrapper">
                                    <div className="commitment-icon">🎓</div>
                                </div>
                                <div className="commitment-details">
                                    <h4>Health Education</h4>
                                    <p>Educating patients on the importance of timely health checkups.</p>
                                </div>
                            </div>

                            <div className="commitment-card">
                                <div className="commitment-icon-wrapper">
                                    <div className="commitment-icon">⚡</div>
                                </div>
                                <div className="commitment-details">
                                    <h4>Immediate Action</h4>
                                    <p>Diagnosing minor ailments and advising treatment immediately.</p>
                                </div>
                            </div>

                            <div className="commitment-card">
                                <div className="commitment-icon-wrapper">
                                    <div className="commitment-icon">🤝</div>
                                </div>
                                <div className="commitment-details">
                                    <h4>Partnerships</h4>
                                    <p>Collaborating with Insurance Companies and Corporate bodies.</p>
                                </div>
                            </div>

                            <div className="commitment-card">
                                <div className="commitment-icon-wrapper">
                                    <div className="commitment-icon">👨‍⚕️</div>
                                </div>
                                <div className="commitment-details">
                                    <h4>Specialized Care</h4>
                                    <p>Partnering with Specialized doctors to provide quality health care.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Others
