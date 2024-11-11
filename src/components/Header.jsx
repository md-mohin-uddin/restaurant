import React, { useState } from "react";
import logoImage from "../images/Frame.png";
import bgImg from "../images/Rectangle4.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-red-700 flex items-center justify-between py-4 px-4 lg:px-8 hero-gradient"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center space-x-2 ">
        <img src={logoImage} alt="Restaurant Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">Restaurant</h1>
      </div>

      <nav className="hidden lg:flex space-x-6">
        {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
          (item) => (
            <a href="#" className="hover:text-yellow-500" key={item}>
              {item}
            </a>
          )
        )}
      </nav>

      <button className="hidden lg:block bg-yellow-500 text-black font-bold px-4 py-2 rounded-md">
        BOOK A TABLE
      </button>

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

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-red-700 text-white flex-col items-center space-y-4 py-4 lg:hidden"
        >
          {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
            (item) => (
              <a href="#" className="hover:text-yellow-500" key={item}>
                {item}
              </a>
            )
          )}
          <button className="bg-yellow-500 text-red-600 font-bold px-4 py-2 rounded-md">
            BOOK A TABLE
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
