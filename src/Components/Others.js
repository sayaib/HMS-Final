import React from 'react'
import guiding from '../Assets/Images/guiding.png'
import staff from '../Assets/Images/staff.jpg'
import value from '../Assets/Images/values.jpg'
import mission from '../Assets/Images/mission.jpeg'
import commitment from '../Assets/Images/commitment.jpg'



const Others = () => {
    return (
        <>
            <div style={{ margin: "2rem" }}>
                <div className="ba-section" id="guidingPrinciple">
                    <div className="about-image-content">
                        <img src={guiding} alt="Doctor Group" className="about-image1" />
                    </div>
                    <div className="about-text-content" style={{ marginTop: "-0.5rem" }}>
                        <h3 className="about-title">
                            <span>Guiding Principle</span>
                        </h3>
                        <p className="about-description">
                            There are our mantra to server the humanity at its fullest using our experienced personals in Management and doctors team:
                        </p>
                        <ul>
                            <li className='dt-smalldes' style={{ listStyleType: "none", textAlign: "left" }}>
                                1.Trust

                            </li>
                            <li className='dt-smalldes' style={{ listStyleType: "none", textAlign: "left" }}>
                                2.Transparency
                            </li>
                            <li className='dt-smalldes' style={{ listStyleType: "none", textAlign: "left" }}>
                                3.Mutual Respect
                            </li>
                            <li className='dt-smalldes' style={{ listStyleType: "none", textAlign: "left" }}>
                                4.Win / Win situation for all persons
                            </li>
                            <li className='dt-smalldes' style={{ listStyleType: "none", textAlign: "left" }}>
                                5.Long Term Commitment
                            </li>
                        </ul>
                    </div>
                </div>


                {/* -------------------- */}


                <div className="about-section" id="staff">


                    <div className="about-text-content" style={{ marginTop: "-0.5rem" }}>
                        <h3 className="about-title">
                            <span>STAFF</span>
                        </h3>
                        <p className="about-description">
                            Our experienced team of medical professionals is dedicated to providing quality care with a personalized patient experience. We are committed to providing safe and reliable treatments which will best suit each patient's needs. We are here to help you get back to feeling your best.
                        </p>

                    </div>
                    <div className="about-image-content">
                        <img src={staff} alt="Doctor Group" className="about-image1" />
                    </div>
                </div>

                {/* ------ */}



                <div className="ba-section" id="ourValues">

                    <div className="about-image-content">
                        <img src={value} alt="Doctor Group" className="about-image1" />
                    </div>
                    <div className="about-text-content" style={{ marginTop: "-0.5rem" }}>
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


                    <div className="about-text-content" style={{ marginTop: "-0.5rem" }}>
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
                        <img src={mission} alt="Doctor Group" className="about-image1" />
                    </div>

                </div>

                {/* ------ */}



                <div className="ba-section" id="ourCommitment">

                    <div className="about-image-content">
                        <img src={commitment} alt="Doctor Group" className="about-image1" />
                    </div>
                    <div className="about-text-content" style={{ marginTop: "-0.5rem" }}>
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