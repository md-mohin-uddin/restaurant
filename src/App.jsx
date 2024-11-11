import React, { useState } from "react";
import "./style.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import PopularFoodItems from "./components/PopularItems";
import BookingTable from "./components/BookingTable";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-roboto text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <PopularFoodItems />
      <BookingTable />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
