import React from "react";
import img1 from "../../assets/16.png";
import img2 from "../../assets/17.png";
import img3 from "../../assets/18.png";
const GemstoneGuide = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-28 py-12 font-body">
      
      {/* Heading */}
      <h1 className="text-center font-heading text-4xl md:text-6xl font-semibold tracking-wide mb-6">
        Gemstone Guide
      </h1>

      {/* List */}
      <div className="text-left text-lg md:text-xl font-medium space-y-2 mb-10">
        <p>Diamond</p>
        <p>Amethyst</p>
        <p>Pearl</p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src={img1}
            alt="Diamond"
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src={img2}
            alt="Amethyst"
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-md shadow-lg">
          <img
            src={img3}
            alt="Pearl"
            className="w-full h-80 object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default GemstoneGuide;
