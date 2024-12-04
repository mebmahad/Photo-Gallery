import React, { useState } from "react";
import PortfolioBtn from "./PortfolioBtn";

const Header = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full h-[400px]">
      {/* Mobile Navigation Toggle */}
      <div
        className="fixed top-4 right-4 z-30 flex flex-col items-center justify-between w-8 h-6 cursor-pointer"
        onClick={handleMenuToggle}
      >
        <div className="w-full h-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 right-4 bg-white text-black shadow-lg rounded-lg w-48 z-40">
          <ul className="flex flex-col">
            <li className="p-3 hover:bg-gray-200">
              <a href="#home">Home</a>
            </li>
            <li className="p-3 hover:bg-gray-200">
              <a href="#about-us">About Us</a>
            </li>
            <li className="p-3 hover:bg-gray-200">
              <PortfolioBtn/>
            </li>
            <li className="p-3 hover:bg-gray-200">
              <a href="#services">Services</a>
            </li>
            <li className="p-3 hover:bg-gray-200">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      )}

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Image */}
      <figure className="relative overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c4b7d0f506fbe1ddbe61072/1705506794483-PLZFGH9DDCQCJ47RX6TJ/Exterior+Building+-+Dawn+%282%29.jpg?format=1500w"
          alt="Exterior Building - Dawn"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Centered Description */}
      <div
        className="desc-wrapper absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white"
        data-content-field="description"
        data-collection-id="5c4b7dd642bfc120277cd28d"
      >
        <p
          className="text-7xl font-serif font-extralight text-slate-300"
          id="yui_3_17_2_1_1732345459248_45"
        >
          <strong data-shrink-original-size="86">Visualize The Future</strong>
        </p>
        <p className="text-3xl font-serif font-extralight" style={{ whiteSpace: "pre-wrap" }}>
          Renderings that bring designs to life.
        </p>
        <button className="mt-4 px-6 py-3 bg-transparent text-white border border-white rounded-full hover:bg-gray-300 hover:text-black transition duration-300">
          <a href="tel:+919860515246">Call Now</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
