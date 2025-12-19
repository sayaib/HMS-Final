import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import Card from "../Extra/Card";


import { Grid, Typography, Divider } from "@mui/material";
import SubwayIcon from "@mui/icons-material/Subway";
import ExploreIcon from "@mui/icons-material/Explore";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AssessmentIcon from "@mui/icons-material/Assessment";

/* --------------------------------- images --------------------------------- */


import imageOne from '../Assets/Images/Rectangle 84-1.png'
import imageTwo from '../Assets/Images/Rectangle 84-2.png'
import imageThree from '../Assets/Images/Rectangle 84-3.png'
import imageFour from '../Assets/Images/Rectangle 84-4.png'
import imageFive from '../Assets/Images/Rectangle 84-5.png'
import imageSix from '../Assets/Images/Rectangle 84-6.png'
import imageSeven from '../Assets/Images/Rectangle 84-7.png'
import imageEight from '../Assets/Images/Rectangle 84-8.png'

import imageNine from '../Assets/Images/Rectangle 84-9.png'
import imageTen from '../Assets/Images/Rectangle 84-10.png'
import imageEleven from '../Assets/Images/Rectangle 84-11.png'
import imageTwelve from '../Assets/Images/Rectangle 84-12.png'
import imageThirteen from '../Assets/Images/Rectangle 84-13.png'
import imageFourteen from '../Assets/Images/Rectangle 84-14.png'
import imageFifteen from '../Assets/Images/Rectangle 84-15.png'
import imageSixteen from '../Assets/Images/Rectangle 84-16.png'
import imageSevenTeen from '../Assets/Images/Rectangle 84.png'

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Services</span>
        </h3>
        {/* <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p> */}
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="24X7 AVAILABLE ONLINE (Virtually)"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Doctor Home visit"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />
      </div>

      <div>

        <Grid
          align="center"
          border="1px solid #000"
          alignItems="center"
          justify="center"
        >
          {/* <Grid style={{ margin: 20 }}>
            <Typography variant="h4">
              <strong>Awesome Card</strong>
            </Typography>
          </Grid>
          <Grid style={{ margin: 20 }}>
            <Typography>change the screen size to see the effect!</Typography>
          </Grid> */}
          {/* 
          <Typography variant="h6">
            <strong>Hidde icon on breakpoints sm (between 600px - 960px)</strong>
          </Typography> */}
          <Divider style={{ margin: 20 }} />
          <Grid container item xs={12} alignItems="center" justify="center">
            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="DonutSmall"
                  secondary="Cardiology"
                  percentage={89.4}
                  color="linear-gradient(60deg, rgba(94,53,177,1) 0%, rgba(3,155,229,1) 100%)"
                  iconPerformance={imageSevenTeen}
                />
              </Grid>
              <Grid container style={{ marginBottom: 25 }} item lg={6}>
                <Card
                  primary="Assessment"
                  secondary="Cardiac Surgery"
                  percentage={100.78}
                  color="linear-gradient(60deg, rgba(245,0,87,1) 0%, rgba(255,138,128,1) 100%)"
                  iconPerformance={imageOne}
                />
              </Grid>

            </Grid>
            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Explore"
                  secondary="Neurology"
                  percentage={90.56}
                  color="linear-gradient(60deg, rgba(251,140,0,1) 0%, rgba(255,202,41,1) 100%)"
                  iconPerformance={imageTwo}
                />
              </Grid>

              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Subway"
                  secondary="Neurosurgery"
                  percentage={78.8}
                  color="linear-gradient(60deg, rgba(67,160,71,1) 0%, rgba(255,235,59,1) 100%)"
                  iconPerformance={imageThree}
                />
              </Grid>

            </Grid>

            {/* ---------------------------------- */}

            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="DonutSmall"
                  secondary="Psychiatrist"
                  percentage={89.4}
                  color="linear-gradient(60deg, rgba(94,53,177,1) 0%, rgba(3,155,229,1) 100%)"
                  iconPerformance={imageFour}
                />
              </Grid>
              <Grid container style={{ marginBottom: 25 }} item lg={6}>
                <Card
                  primary="Assessment"
                  secondary="Gastroenterology"
                  percentage={100.78}
                  color="linear-gradient(60deg, rgba(245,0,87,1) 0%, rgba(255,138,128,1) 100%)"
                  iconPerformance={imageFive}
                />
              </Grid>

            </Grid>
            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Explore"
                  secondary="Gynecology"
                  percentage={90.56}
                  color="linear-gradient(60deg, rgba(251,140,0,1) 0%, rgba(255,202,41,1) 100%)"
                  iconPerformance={imageSix}
                />
              </Grid>

              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Subway"
                  secondary="Nephrology"
                  percentage={78.8}
                  color="linear-gradient(60deg, rgba(67,160,71,1) 0%, rgba(255,235,59,1) 100%)"
                  iconPerformance={imageSeven}
                />
              </Grid>

            </Grid>
            {/* ----------------------------------------------- */}


            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="DonutSmall"
                  secondary="Urology"
                  percentage={89.4}
                  color="linear-gradient(60deg, rgba(94,53,177,1) 0%, rgba(3,155,229,1) 100%)"
                  iconPerformance={imageEight}
                />
              </Grid>
              <Grid container style={{ marginBottom: 25 }} item lg={6}>
                <Card
                  primary="Assessment"
                  secondary="Chest Medicine"
                  percentage={100.78}
                  color="linear-gradient(60deg, rgba(245,0,87,1) 0%, rgba(255,138,128,1) 100%)"
                  iconPerformance={imageNine}
                />
              </Grid>

            </Grid>
            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Explore"
                  secondary="General Surgery"
                  percentage={90.56}
                  color="linear-gradient(60deg, rgba(251,140,0,1) 0%, rgba(255,202,41,1) 100%)"
                  iconPerformance={imageTen}
                />
              </Grid>

              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Subway"
                  secondary="Orthopedics"
                  percentage={78.8}
                  color="linear-gradient(60deg, rgba(67,160,71,1) 0%, rgba(255,235,59,1) 100%)"
                  iconPerformance={imageEleven}
                />
              </Grid>

            </Grid>

            {/* ----------------------------------------------- */}


            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="DonutSmall"
                  secondary="General Medicine"
                  percentage={89.4}
                  color="linear-gradient(60deg, rgba(94,53,177,1) 0%, rgba(3,155,229,1) 100%)"
                  iconPerformance={imageTwelve}
                />
              </Grid>
              <Grid container style={{ marginBottom: 25 }} item lg={6}>
                <Card
                  primary="Assessment"
                  secondary="Diabetology"
                  percentage={100.78}
                  color="linear-gradient(60deg, rgba(245,0,87,1) 0%, rgba(255,138,128,1) 100%)"
                  iconPerformance={imageThirteen}
                />
              </Grid>

            </Grid>
            <Grid container item sm={6}>
              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Explore"
                  secondary="Dermatology"
                  percentage={90.56}
                  color="linear-gradient(60deg, rgba(251,140,0,1) 0%, rgba(255,202,41,1) 100%)"
                  iconPerformance={imageFourteen}
                />
              </Grid>

              <Grid container item lg={6} style={{ marginBottom: 25 }}>
                <Card
                  primary="Subway"
                  secondary="ENT"
                  percentage={78.8}
                  color="linear-gradient(60deg, rgba(67,160,71,1) 0%, rgba(255,235,59,1) 100%)"
                  iconPerformance={imageFifteen}
                />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Info;
