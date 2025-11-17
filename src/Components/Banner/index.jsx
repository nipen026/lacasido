import React from 'react';
import banner from '../../assets/banner.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative h-[calc(100vh-130px)] w-full bg-fixed bg-top bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
      aria-label="Vigo bee Banner"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center">
        <div className="container text-center mx-auto px-4 text-white max-w-4xl z-20">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-center md:hidden inline-block animate-typing whitespace-nowrap overflow-hidden">
              VigoBee
            </span>
            <span className="hidden md:inline-block animate-typing whitespace-nowrap overflow-hidden">
              VigoBee – Elevate Your Style
            </span>
          </h1>

          <p className="mb-6 text-xl font-light">
            Explore the finest in men’s and women’s fashion with VigoBee's exclusive seasonal collections. From timeless basics to bold new arrivals — we redefine modern fashion.
          </p>

          <button
            onClick={() => navigate('/productListing?latest=true')}
            className="border border-white font-semibold px-6 py-2 text-white hover:bg-white hover:text-primary ease-in transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
