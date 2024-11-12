import React, { useState } from "react";
import logoImage from "../images/Frame.png";
import bgImg from "../images/Rectangle4.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="relative bg-red-700 flex items-center justify-between py-4 px-4 lg:px-8 hero-gradient"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logoImage} alt="Restaurant Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-white">Restaurant</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6">
        {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
          (item) => (
            <a href="#" className="hover:text-yellow-500 text-white" key={item}>
              {item}
            </a>
          )
        )}
      </nav>

      {/* Book a Table Button for Desktop */}
      <button
        className="hidden lg:block bg-yellow-500 text-black font-bold px-4 py-2 rounded-md"
        onClick={() => {
          document.getElementById("booking-section").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        BOOK A TABLE
      </button>

      {/* Mobile Menu Button */}
      <button
        id="menu-btn"
        className="lg:hidden focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-red-700 text-white flex flex-col items-center space-y-4 py-6 lg:hidden z-50 transition-all duration-300"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
          }}
        >
          {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
            (item) => (
              <a
                href="#"
                className="hover:text-yellow-500 text-lg"
                key={item}
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            )
          )}
          <button
            className="bg-yellow-500 text-red-600 font-bold px-4 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)} // Close menu on click
          >
            BOOK A TABLE
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
