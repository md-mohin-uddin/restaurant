import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import profileImage from "../images/Image.png";

const Testimonials = () => {
  return (
    <section className=" bg-[#F9F5F0] py-16 px-8">
      <div className="w-3/4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <div className="text-left mb-6 lg:mb-0">
            <p className="text-red-700 font-medium flex items-center">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              Crispy, Every Bite Taste
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 uppercase text-gray-900">
              What Some of Our Customers Say
            </h2>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white rounded-full shadow-lg p-3 text-[#0a1425]">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="bg-white rounded-full shadow-lg p-3 text-[#e02c2b]">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Testimonial and Video Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center bg-white rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row items-stretch w-full lg:px-0">
            {/* Testimonial Card */}
            <div className="bg-yellow-500 p-8 md:p-12 shadow-lg w-full lg:w-5/12 flex flex-col justify-between text-gray-800">
              <p className="text-2xl font-bold text-yellow-800 mb-4">&ldquo;</p>
              <p className="text-lg leading-relaxed">
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would definitely recommend it.
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="font-bold">KHALID AL DAWSRY</p>
                  <p className="text-sm text-gray-700">Jeddah, Saudi Arabia</p>
                </div>
                <img
                  src={profileImage}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full shadow-md"
                />
              </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full lg:w-7/12 h-64 lg:h-auto flex justify-center items-center overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-foo92lFIto?si=s3CAX5gFfgRDPgDS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
