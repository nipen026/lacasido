import React from 'react';
import bannerGif from '../../assets/banner.jpg';

const FooterBanner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full overflow-hidden shadow-md">
        <img
          src={bannerGif}
          alt="Mega Sale Banner"
         className="w-full h-auto md:h-96 lg:h-[500px] object-cover object-[25%_20%]"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
