import React from "react";
import bgImg from "../images/Rectangle4.png";
import foodImage from "../images/image 1.png";
import Button from "./Button";

function HeroSection() {
  return (
    <section
      className="relative bg-red-700 text-white py-24 px-4 lg:px-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col lg:flex-row items-center w-3/4 mx-auto">
        <div className="lg:w-full space-y-4 lg:space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-wide title uppercase hero-heading">
            Taste the Authentic Saudi Cuisine
          </h1>
          <p className="text-lg lg:text-xl">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <Button text="Explore Menu" />
        </div>
        <div className="lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center items-center">
          <div className="relative">
            <img
              src={foodImage}
              alt="Delicious Food"
              className="rounded-lg shadow-lg max-w-full lg:max-w-lg"
            />
            <div
              className="absolute bottom-4 right-5 bg-yellow-500 text-black font-bold w-24 h-24 rounded-full shadow-lg flex items-center justify-center text-center uppercase"
              style={{ transform: "translate(70%, 20%)" }}
            >
              <span className="text-m leading-tight">Today Offer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
