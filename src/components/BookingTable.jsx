import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../images/curtlery.jpeg";

const BookingTable = () => {
  // Create a ref to access the date input
  const dateInputRef = useRef(null);

  // Function to focus the date input when clicking on the icon
  const handleDateIconClick = () => {
    dateInputRef.current?.focus();
  };

  return (
    <section
      className="bg-cover bg-center py-10 px-4 text-white"
      id="booking-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        <div className="lg:w-1/2">
          <h2 className="text-red-500 text-sm font-semibold mb-2">
            <span className="inline-block w-2 h-2 bg-red-600 mr-2"></span>Book
            Now
          </h2>
          <h1 className="lg:text-4xl text-2xl font-bold mb-4 title">
            BOOK YOUR TABLE
          </h1>
          <p className="mb-8 text-gray-300">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="relative w-full">
                <input
                  type="date"
                  placeholder="Reservation Date"
                  ref={dateInputRef} // Attach ref to the date input
                  className="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={handleDateIconClick} // Set onClick handler on the icon
                >
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Total People"
                  className="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FontAwesomeIcon icon={faUsers} />
                </span>
              </div>
            </div>
            <textarea
              placeholder="Message"
              className="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full h-32 resize-none focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold px-6 py-3 hover:bg-yellow-600 transition"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingTable;
