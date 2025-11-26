import React from "react";
import logo from '../../assets/logo.png';
import set from '../../assets/5.jpg';
import model1 from '../../assets/6.jpg';
import model2 from '../../assets/7.jpg';

const LacasidoUI = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white gap-6 md:gap-0 p-4 md:p-8">

            {/* LEFT SECTION */}
            <div className="flex items-center justify-center text-center md:text-left">
                <div className="space-y-6 max-w-lg">
                    
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide"
                        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}
                    >
                        Gopi impex & Co.
                    </h1>

                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={logo}
                            alt="Lacasido Logo"
                            className="w-48 sm:w-64 md:w-72 lg:w-80 object-contain"
                        />
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Discover our passion for exquisite, stackable jewellery.
                        We create timeless pieces crafted with diamonds 💎 and love 💕 since 2020.
                    </p>
                </div>
            </div>

            {/* RIGHT SECTION – IMAGES */}
            <div className="grid grid-cols-2 gap-3">

                {/* LARGE IMAGE */}
                <div className="col-span-2 sm:col-span-1">
                    <img
                        src={set}
                        alt="Jewellery"
                        className="w-full h-[280px] sm:h-[380px] md:h-[500px] object-cover rounded-lg"
                    />
                </div>

                {/* RIGHT COLUMN IMAGES */}
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
                    <img
                        src={model1}
                        alt="Model"
                        className="w-full h-[200px] sm:h-[180px] md:h-[240px] lg:h-[260px] object-cover rounded-lg"
                    />
                    <img
                        src={model2}
                        alt="Model"
                        className="w-full h-[200px] sm:h-[180px] md:h-[240px] lg:h-[260px] object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default LacasidoUI;
