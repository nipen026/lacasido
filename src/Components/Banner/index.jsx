// import React from 'react';
// import banner from '../../assets/banner_video.mp4';
// import { useNavigate } from 'react-router-dom';

// const Banner = () => {
//   const navigate = useNavigate();
//   return (
//     <section
//       className="relative h-[calc(100vh-130px)] w-full bg-fixed bg-top bg-cover"
//       style={{ background: `url(${banner})` }}
//       aria-label="Vigo bee Banner"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10 flex items-center">
//         <div className="container text-center mx-auto px-4 text-white max-w-4xl z-20">
//           <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
//             <span className="text-center md:hidden inline-block animate-typing whitespace-nowrap overflow-hidden">
//               VigoBee
//             </span>
//             <span className="hidden md:inline-block animate-typing whitespace-nowrap overflow-hidden">
//               VigoBee – Elevate Your Style
//             </span>
//           </h1>

//           <p className="mb-6 text-xl font-light">
//             Explore the finest in men’s and women’s fashion with VigoBee's exclusive seasonal collections. From timeless basics to bold new arrivals — we redefine modern fashion.
//           </p>

//           <button
//             onClick={() => navigate('/productListing?latest=true')}
//             className="border border-white font-semibold px-6 py-2 text-white hover:bg-white hover:text-primary ease-in transition"
//           >
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
import React from 'react';
import banner from '../../assets/banner_video.mp4';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[calc(100vh-130px)] w-full overflow-hidden"
      aria-label="Lacasido Jewellery Banner"
    >
      {/* Background Video */}
      <video
        src={banner}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000]/70 z-10 flex items-center">
        <div className="container text-center mx-auto px-4 text-white max-w-4xl z-20">

          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-center md:hidden inline-block animate-typing whitespace-nowrap overflow-hidden">
              Lacasido Jewellery
            </span>
            <span className="hidden md:inline-block animate-typing whitespace-nowrap overflow-hidden">
              Lacasido Jewellery 
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-6 text-xl font-light">
            Discover premium diamond rings designed to shine with every moment.  
            At Lacasido Jewellery, elegance meets craftsmanship in every piece.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate('/productListing?latest=true')}
            className="border border-white font-semibold px-6 py-2 text-white hover:bg-white hover:text-primary ease-in transition"
          >
            Explore Diamond Rings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;


