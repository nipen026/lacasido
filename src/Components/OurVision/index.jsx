import React from "react";
import logo from '../../assets/logo.png';
import ring from '../../assets/ring.jpg';

const OurVision = () => {
    return (
        <div className="flex items-center justify-center space-y-10   bg-white">

            {/* LEFT SECTION */}
           <div className="flex items-center justify-between gap-[50px] p-10">
             <div className="flex items-center gap-3">

                {/* Large Image */}
                <div className="">
                    <img
                        src={ring}   // replace with real image
                        alt="Jewellery"
                        className="w-[700px] h-[600px] object-cover object-center rounded-[50px]"
                    />
                </div>

                {/* Top Right Image */}


            </div>
            <div className="flex items-center justify-center ">
                {/* Small Heading */}
                <div className="space-y-8">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <img
                            src={logo}   // replace with actual logo
                            alt="Lacasido Logo"
                            className="w-80"
                        />
                    </div>
                    <h1
                        className="text-3xl md:text-4xl font-light tracking-wide text-center md:text-left"
                        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}
                    >
                        Our Vision At LACASIDO
                    </h1>
                    {/* Description */}
                    <p className="text-gray-700 text-lg capitalize leading-relaxed max-w-xl">
                        everything we do. Each piece of jewellery is a
                        testament to the dedication and skill of our master
                        artisans. We combine traditional techniques passed
                        down through generations with contemporary
                        design principles to create truly unique and
                        enduring treasures. Our process begins with
                        carefully selected, ethically sourced materials,
                        ensuring both beauty and integrity. From the initial
                        sketch to the final polish, every step is executed
                        with meticulous attention to detail. We believe in
                        creating jewellery that is not just an accessory, but
                        a work of art—a piece that you will cherish for a
                        lifetime and beyond. Our commitment to excellence
                        guarantees that every curve, every setting, and
                        every facet reflects our unwavering pursuit of
                        perfection.
                    </p>
                </div>
            </div>

           </div>
            {/* RIGHT SECTION – IMAGES */}

        </div>
    );
};

export default OurVision;
