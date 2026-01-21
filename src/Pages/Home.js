import React, { lazy } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
const Info = lazy(() => import("../Components/Info"));
const About = lazy(() => import("../Components/About"));
const BookAppointment = lazy(() => import("../Components/BookAppointment"));
const Reviews = lazy(() => import("../Components/Reviews"));
const Doctors = lazy(() => import("../Components/Doctors"));
const Footer = lazy(() => import("../Components/Footer"));
const Location = lazy(() => import("../Components/Location"));
const Others = lazy(() => import("../Components/Others"));

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <About />
      <BookAppointment />
      <Info />
      <Reviews />
      <Others />
      <Doctors />
      <Location />
      <Footer />
    </div>
  );
}

export default Home;
