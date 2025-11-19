import React from "react";
import logo from '../../assets/logo.png';
import set from '../../assets/5.jpg';
import model1 from '../../assets/6.jpg';
import model2 from '../../assets/7.jpg';
const LacasidoUI = () => {
    return (
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 bg-white">

            {/* LEFT SECTION */}
            <div className="flex items-center justify-center ">
                {/* Small Heading */}
               <div className="space-y-8">
                 <h1
                    className="text-3xl md:text-4xl font-light tracking-wide text-center md:text-left"
                    style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}
                >
                    Gopi impex & Co.
                </h1>

                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <img
                        src={logo}   // replace with actual logo
                        alt="Lacasido Logo"
                        className="w-80"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                    Discover our passion for exquisite, stackable jewellery. We created
                    special jewellery from diamond 💎 and filling Love 💕 since 2020.
                </p>
               </div>
            </div>

            {/* RIGHT SECTION – IMAGES */}
            <div className="grid grid-cols-2 gap-3 p-4">

                {/* Large Image */}
                <div className="col-span-1 md:col-span-1">
                    <img
                        src={set}   // replace with real image
                        alt="Jewellery"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Top Right Image */}
                <div className="space-y-2">
                    <div className="col-span-1">
                        <img
                            src={model1}
                            alt="Model"
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="col-span-1">
                        <img
                            src={model2}
                            alt="Model"
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LacasidoUI;
