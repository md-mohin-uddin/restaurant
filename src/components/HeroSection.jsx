import React from "react";
import bgImg from "../images/Rectangle4.png";
import foodImage from "../images/image 1.png";
import Button from "./Button";

function HeroSection() {
  return (
    <section
      className="relative bg-red-700 text-white py-16 px-4 lg:px-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-4 lg:space-y-6 text-start lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-wide uppercase leading-tight">
            Taste the Authentic Saudi Cuisine
          </h1>
          <p className="text-base lg:text-lg">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <Button
            text="Explore Menu"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md"
          />
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          <div className="relative">
            <img
              src={foodImage}
              alt="Delicious Food"
              className="rounded-lg shadow-lg max-w-full"
            />
            <div
              className="absolute bottom-4 right-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg flex items-center justify-center text-center uppercase w-16 h-16 lg:w-24 lg:h-24"
              style={{
                transform:
                  window.innerWidth >= 1024
                    ? "translate(70%, 20%)"
                    : "translate(20%, 20%)",
              }}
            >
              <span className="text-xs lg:text-lg leading-tight">
                Today Offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
