import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Location from "../Components/Location";
import Others from "../Components/Others";

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
