import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faUtensils,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className="container w-3/4 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
      <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4">
        <div className="text-red-600">
          <FontAwesomeIcon icon={faTruck} size="2x" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">FAST DELIVERY</h3>
          <p className="text-gray-500">Within 30 minutes</p>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4">
        <div className="text-red-600">
          <FontAwesomeIcon icon={faUtensils} size="2x" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">ABSOLUTE DINING</h3>
          <p className="text-gray-500">Best buffet restaurant</p>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4">
        <div className="text-red-600">
          <FontAwesomeIcon icon={faBagShopping} size="2x" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">PICKUP DELIVERY</h3>
          <p className="text-gray-500">Grab your food order</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
