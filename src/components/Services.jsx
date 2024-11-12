import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faUtensils,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className="container w-11/12 mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-center">
        {/* Fast Delivery */}
        <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg flex items-center md:justify-center space-x-4 md:space-x-6">
          <div className="bg-gray-100 p-3 rounded-full text-red-600">
            <FontAwesomeIcon icon={faTruck} size="lg" />
          </div>
          <div className="text-left">
            <h3 className="text-base md:text-xl font-bold text-gray-800">
              FAST DELIVERY
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Grab your food order
            </p>
          </div>
        </div>

        {/* Absolute Dining */}
        <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg flex items-center md:justify-center space-x-4 md:space-x-6">
          <div className="bg-gray-100 p-3 rounded-full text-red-600">
            <FontAwesomeIcon icon={faUtensils} size="lg" />
          </div>
          <div className="text-left">
            <h3 className="text-base md:text-xl font-bold text-gray-800">
              ABSOLUTE DINING
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Grab your food order
            </p>
          </div>
        </div>

        {/* Pickup Delivery */}
        <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg flex items-center md:justify-center space-x-4 md:space-x-6">
          <div className="bg-gray-100 p-3 rounded-full text-red-600">
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </div>
          <div className="text-left">
            <h3 className="text-base md:text-xl font-bold text-gray-800">
              PICKUP DELIVERY
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Grab your food order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
