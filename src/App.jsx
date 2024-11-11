import React, { useState } from "react";
import "./style.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import PopularFoodItems from "./components/PopularItems";
function App() {
  return (
    <div className="font-roboto text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <PopularFoodItems />
    </div>
  );
}

export default App;
