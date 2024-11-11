import React, { useState } from "react";
import "./style.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="font-roboto text-white">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
