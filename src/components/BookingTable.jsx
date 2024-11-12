import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../images/curtlery.jpeg";

const BookingTable = () => {
  return (
    <section
      className="bg-cover bg-center py-10 px-4 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        <div class="lg:w-1/2">
          <h2 class="text-red-500 text-sm font-semibold mb-2">
            <span class="inline-block w-2 h-2 bg-red-600 mr-2"></span>Book Now
          </h2>
          <h1 class="lg:text-4xl text-2xl font-bold mb-4 title">
            BOOK YOUR TABLE
          </h1>
          <p class="mb-8 text-gray-300">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form class="space-y-4">
            <div class="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <input
                type="text"
                placeholder="Your Name *"
                class="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                class="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
              />
            </div>
            <div class="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <div class="relative w-full">
                <input
                  type="text"
                  placeholder="Reservation Date"
                  class="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
                />
                <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i class="far fa-calendar-alt"></i>
                </span>
              </div>
              <div class="relative w-full">
                <input
                  type="text"
                  placeholder="Total People"
                  class="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full focus:outline-none"
                />
                <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i class="fas fa-users"></i>
                </span>
              </div>
            </div>
            <textarea
              placeholder="Message"
              class="bg-transparent border border-gray-600 p-4 text-white rounded-md w-full h-32 resize-none focus:outline-none"
            ></textarea>
            <button
              type="submit"
              class="bg-yellow-500 text-black font-semibold px-6 py-3 hover:bg-yellow-600 transition"
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
