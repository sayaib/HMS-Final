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
                        <ul>
                            <li className='dt-smalldes others-list-item'>
                                1.Trust
                            </li>
                            <li className='dt-smalldes others-list-item'>
                                2.Transparency
                            </li>
                            <li className='dt-smalldes others-list-item'>
                                3.Mutual Respect
                            </li>
                            <li className='dt-smalldes others-list-item'>
                                4.Win / Win situation for all persons
                            </li>
                            <li className='dt-smalldes others-list-item'>
                                5.Long Term Commitment
                            </li>
                        </ul>
                    </div>
                </div>


                {/* -------------------- */}


                <div className="about-section" id="staff">


                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>STAFF</span>
                        </h3>
                        <p className="about-description">
                            Our experienced team of medical professionals is dedicated to providing quality care with a personalized patient experience. We are committed to providing safe and reliable treatments which will best suit each patient's needs. We are here to help you get back to feeling your best.
                        </p>

                    </div>
                    <div className="about-image-content">
                        <img src={staff} alt="Staff" className="about-image1" />
                    </div>
                </div>

                {/* ------ */}



                <div className="ba-section" id="ourValues">

                    <div className="about-image-content">
                        <img src={value} alt="Our Values" className="about-image1" />
                    </div>
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>OUR VALUES</span>
                        </h3>
                        <p className="about-description">
                            Treatment Solution Polyclinic treats all patients, visitor’s and one another with compassion and respect, work as a team to provide quality care and services to patients and contribute to ongoing improvement and excellence we do.
                        </p>

                    </div>

                </div>

                {/* ------ */}



                <div className="about-section" id="missionVission">


                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>MISSION & VISION</span>
                        </h3>
                        <p className="about-description">
                            Vision: Awarding everyone with all the health care issues
                        </p>
                        <p className="about-description">
                            Mission: Providing reliable health care facilities for all common man
                        </p>

                    </div>

                    <div className="about-image-content">
                        <img src={mission} alt="Mission and Vision" className="about-image1" />
                    </div>

                </div>

                {/* ------ */}



                <div className="ba-section" id="ourCommitment">

                    <div className="about-image-content">
                        <img src={commitment} alt="Our Commitment" className="about-image1" />
                    </div>
                    <div className="about-text-content others-margin-top">
                        <h3 className="about-title">
                            <span>OUR COMMITMENTS</span>
                        </h3>
                        <p className="about-description">
                            The Company’s name and logo reflects the nature of the company and its commitment to serve its clients/patients. In an effort to gain the confidence of the clients/patients and expand the market, Treatment Solution Polyclinic will work out plans and schemes to bring preventive care in the forefront. It will educate the clients/patients on the importance of timely health checkups to diagnose minor ailments and advise treatment immediately. It will partner with local council and Insurance Companies and Corporate bodies to tap in more clients/patients. It will partner with the Specialized doctors and provide quality health care.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Others
