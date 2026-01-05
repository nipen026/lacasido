import React from "react";
import img1 from "../../assets/16.png";
import img2 from "../../assets/17.png";
import img3 from "../../assets/18.png";

const GemstoneGuide = () => {
  const navigate = (url) => {
    window.location.href = url;
  }
  return (
    <div className="w-full px-6 md:px-16 lg:px-28 py-12 font-body">

      {/* Heading */}
      <h1 className="text-center font-heading text-4xl md:text-6xl font-semibold tracking-wide mb-6">
        Gemstone Guide
      </h1>


      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

        {/* Image Card with Overlay */}
        <div className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer">
          <img
            src={img1}
            alt="Diamond"
            className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <span className="text-white text-3xl font-semibold tracking-wide">
              Diamond
            </span>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer">
          <img
            src={img2}
            alt="Amethyst"
            className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <span className="text-white text-3xl font-semibold tracking-wide">
              Amethyst
            </span>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer">
          <img
            src={img3}
            alt="Pearl"
            className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <span className="text-white text-3xl font-semibold tracking-wide">
              Pearl
            </span>
          </div>
        </div>
      
      </div>
        <div className="flex justify-center w-full mt-20">
          <button
            onClick={() => navigate('/productListing?latest=true')}
            className="border border-black font-semibold px-6 py-2 text-black hover:bg-black hover:text-white ease-in transition"
          >
            Explore Diamonds
          </button>
        </div>
    </div>
  );
};

export default GemstoneGuide;
