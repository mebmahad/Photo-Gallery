import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Image */}
      <figure className="relative overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c4b7d0f506fbe1ddbe61072/1705506794483-PLZFGH9DDCQCJ47RX6TJ/Exterior+Building+-+Dawn+%282%29.jpg?format=1500w"
          alt="Exterior Building - Dawn"
          className="w-full h-auto object-cover"
        />
      </figure>
      
      {/* Description */}
      <div className="absolute bottom-5 left-5 z-20 text-white">
        <p className="text-lg font-bold">Visualize The Future</p>
        <p className="text-sm">Renderings that bring designs to life.</p>
        <p>
          <a href="tel:+16469186030" className="text-blue-500 underline">
            Call Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
