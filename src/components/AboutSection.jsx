import React from "react";
import aboutImage from "../images/Frame 1707478063.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function AboutSection() {
  return (
    <section className="w-3/4 mx-auto my-6 p-6 lg:flex lg:space-x-12">
      <div className="lg:w-1/2 flex justify-evenly">
        <div className="relative mb-6 lg:mb-0">
          <img
            src={aboutImage}
            alt="Delicious Food"
            className="rounded-lg shadow-lg"
          />
          <div className=" absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg  flex items-center space-x-4">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={80}
                maxValue={100}
                text="50"
                styles={buildStyles({
                  pathColor: "#FFC107",
                  trailColor: "#e0e0e0",
                  textColor: "#000",
                  textSize: "24px",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <div>
              <p className="text-lg text-black font-semibold">Market</p>
              <p className="text-lg text-black font-semibold">Experiences</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <div className="flex space-x-4 border-b pb-2">
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
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mt-4 title">
          EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus.
        </p>
        <div className="flex items-center justify-evenly">
          <div className="">
            <Button text="ABOUT MORE" />
          </div>
          <div className="text-gray-800 font-bold text-xl mt-5 ">
            <FontAwesomeIcon icon={faPhone} className="text-red-500 w-3 h-3" />{" "}
            +88 3426 739 485
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
