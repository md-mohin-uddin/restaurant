import React from "react";
import aboutImage from "../images/Frame 1707478063.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function AboutSection() {
  return (
    <section className="w-11/12 mx-auto my-6 p-4 lg:p-6 lg:flex lg:space-x-12">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-evenly mb-8 lg:mb-0">
        <div className="relative">
          <img
            src={aboutImage}
            alt="Delicious Food"
            className="rounded-lg shadow-lg w-full max-w-xs lg:max-w-full"
          />
          <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-4">
            <div style={{ width: 50, height: 50 }} className="lg:w-16 lg:h-16">
              <CircularProgressbar
                value={80}
                maxValue={100}
                text="50+"
                styles={buildStyles({
                  pathColor: "#FFC107",
                  trailColor: "#e0e0e0",
                  textColor: "#000",
                  textSize: "24px",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-lg text-black font-semibold">Market</p>
              <p className="text-lg text-black font-semibold">Experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/3 space-y-6 lg:space-y-8">
        {/* Tabs */}
        <div className="flex justify-around lg:justify-start lg:space-x-4 border-b pb-2">
          <a
            href="#"
            className="text-red-600 font-bold border-b-2 border-red-600 pb-2"
          >
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            Experience
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            Contact
          </a>
        </div>

        {/* Content */}
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mt-4 lg:mt-0">
          EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus.
        </p>

        {/* Button and Contact */}
        <div className="flex flex-col lg:flex-row items-center justify-start space-y-4 ">
          <Button text="ABOUT MORE" />
          <div className="text-gray-800 font-bold text-base lg:text-xl flex items-center ml-3">
            <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-1" />
            +88 3426 739 485
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
