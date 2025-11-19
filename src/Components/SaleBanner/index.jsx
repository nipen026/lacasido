import React from 'react';
// import bannerGif from '../../assets/uper-banner.gif';
import inner_banner from '../../assets/inner_banner.jpg';
import logo from '../../assets/logo.png';


const SaleBanner = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif font-semibold tracking-[3px]">
          JEWELLERY PIONEER
        </h1>
      </div>

      <div className="w-full py-4 flex justify-center items-center">
        <div className="w-full  px-4">
          <div className="relative rounded-xl overflow-hidden md:shadow-md">
            <img
              src={inner_banner}
              alt="Mega Sale Banner"
              className="w-full h-[700px]  object-cover"
            />
            <div className="absolute top-[20%] left-[10%] opacity-[0.5] flex items-center gap-2 text-primary font-bold text-lg ">
              <img src={logo} alt='logo' className='w-[500px]  object-cover cursor-pointer' />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SaleBanner;
