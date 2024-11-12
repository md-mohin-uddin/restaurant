import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import burgerImage from "../images/burger.png";
import pizzaImage from "../images/pizza.png";
import friesImage from "../images/french-fries.png";
import chickenImage from "../images/cusine chicken.png";

const foodItems = [
  {
    image: burgerImage,
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: pizzaImage,
    title: "SPECIAL PIZZA",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: friesImage,
    title: "SPECIAL FRENCH FRIES",
    description: "Barbecue Italian cuisine",
  },
  {
    image: chickenImage,
    title: "CUISINE CHICKEN",
    description: "Japanese Cuisine Chicken",
  },
];

const PopularFoodItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#F9F5F0] py-16 px-8 mt-5">
      <div className="lg:w-3/4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <p className="text-[#bd1f17] font-medium">
              <span className="inline-block w-2 h-2 bg-red-600 mr-2"></span>
              Crispy, Every Bite Taste
            </p>
            <h2
              className="lg:text-4xl text-2xl font-bold mt-2 mb-6 title"
              style={{ color: "#181818" }}
            >
              POPULAR FOOD ITEMS
            </h2>
          </div>
        </div>

        {/* Carousel for mobile and grid for larger screens */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? "block" : "hidden"
                } sm:block lg:block`}
              >
                <FoodItem
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          {/* Arrows for navigation */}
          <div className="flex justify-center mt-6 sm:hidden">
            <button
              onClick={handlePrevious}
              className="bg-white rounded-full shadow-lg p-3 mx-3"
              style={{ color: "#0a1425" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full shadow-lg p-3 mx-3"
              style={{ color: "red" }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FoodItem = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <img
        src={image}
        alt={title}
        className="mx-auto mb-4 w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-bold" style={{ color: "#0a1425" }}>
        {title}
      </h3>
      <p className="text-gray-500 mt-2">{description}</p>
      <hr className="border-red-500 border-t-2 my-4 w-12 mx-auto" />
    </div>
  );
};

export default PopularFoodItems;
