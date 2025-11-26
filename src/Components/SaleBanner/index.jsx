// import React from 'react';
// // import bannerGif from '../../assets/uper-banner.gif';
// import inner_banner from '../../assets/inner_banner.jpg';
// import logo from '../../assets/logo.png';
// import jewel from '../../assets/15.jpg';


// const SaleBanner = () => {
//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif font-semibold tracking-[3px]">
//           JEWELLERY PIONEER
//         </h1>
//       </div>

//       <div className="w-full py-4 flex justify-center items-center">
//         <div className="w-full  px-4">
//           <div className="relative rounded-xl overflow-hidden md:shadow-md">
//             <img
//               src={inner_banner}
//               alt="Mega Sale Banner"
//               className="w-full h-[700px]  object-cover"
//             />
//             <div className="absolute top-[20%] left-[10%] opacity-[0.8] flex items-center gap-2 text-primary font-bold text-lg ">
//               <img src={logo} alt='logo' className='w-[500px]  object-cover cursor-pointer' />
//             </div>
//             <div className="absolute top-[10%] -right-[5%] opacity-[0.2] flex items-center gap-2 text-primary font-bold text-lg ">
//               <img src={jewel} alt='jewel' className='w-[500px] h-[600px] rounded-[50px] object-cover cursor-pointer' />
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default SaleBanner;
import React from 'react';
import inner_banner from '../../assets/inner_banner.jpg';
import logo from '../../assets/logo.png';
import jewel from '../../assets/15.jpg';

const SaleBanner = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif font-semibold tracking-[3px]">
          JEWELLERY PIONEER
        </h1>
      </div>

      <div className="w-full py-4 flex justify-center items-center">
        <div className="w-full px-4">
          <div className="relative rounded-xl overflow-hidden md:shadow-md">

            {/* MAIN BANNER */}
            <img
              src={inner_banner}
              alt="Mega Sale Banner"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px] object-cover"
            />

            {/* LEFT LOGO */}
            <div className="absolute top-[10%] left-[5%] sm:top-[15%] sm:left-[8%] 
                            opacity-80 flex items-center">
              <img
                src={logo}
                alt="logo"
                className="w-[140px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[450px] 
                           object-contain cursor-pointer"
              />
            </div>

            {/* RIGHT JEWEL IMAGE */}
            <div className="absolute top-[5%] right-[-10%] sm:top-[10%] sm:right-[0%] 
                            opacity-20 hidden sm:flex items-center">
              <img
                src={jewel}
                alt="jewel"
                className="w-[180px] sm:w-[260px] md:w-[350px] lg:w-[450px] xl:w-[400px] 
                           h-auto rounded-s-[40px] object-cover cursor-pointer"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SaleBanner;
