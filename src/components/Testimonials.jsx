import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import profileImage from "../images/Image.png";

const testimonialsData = [
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    name: "KHALID AL DAWSRY",
    location: "Jeddah, Saudi Arabia",
    image: profileImage,
  },
  {
    text: "I tried the lamb mandi, and it was amazing! The meat was tender, and the flavors were spot on. Highly recommend this place.",
    name: "AHMED AL QAHTANI",
    location: "Riyadh, Saudi Arabia",
    image: profileImage,
  },
  {
    text: "Great ambiance and delicious food. The mandi rice was perfectly cooked and the spices were just right. Will visit again!",
    name: "FATIMA AL AMRI",
    location: "Dammam, Saudi Arabia",
    image: profileImage,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#F9F5F0] py-16 px-8">
      <div className="w-full lg:w-3/4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <div className="text-left mb-6 lg:mb-0">
            <p className="text-red-700 font-medium flex items-center">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              Crispy, Every Bite Taste
            </p>
            <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold mt-2 uppercase text-gray-900">
              What Some of Our Customers Say
            </h2>
          </div>

          {/* Navigation Buttons for Desktop */}
          <div className="hidden lg:flex space-x-3">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full shadow-lg p-3 text-gray-700"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full shadow-lg p-3 text-red-600"
            >
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
              <p className="text-base lg:text-lg leading-relaxed">
                {testimonialsData[currentTestimonial].text}
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="font-bold">
                    {testimonialsData[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-700">
                    {testimonialsData[currentTestimonial].location}
                  </p>
                </div>
                <img
                  src={testimonialsData[currentTestimonial].image}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full shadow-md"
                />
              </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full lg:w-7/12 h-48 lg:h-auto flex justify-center items-center overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-foo92lFIto?si=s3CAX5gFfgRDPgDS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Navigation Buttons for Mobile */}
        <div className="flex lg:hidden justify-center space-x-3 mt-4">
          <button
            onClick={prevTestimonial}
            className="bg-white rounded-full shadow-lg p-3 text-gray-700"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white rounded-full shadow-lg p-3 text-red-600"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
