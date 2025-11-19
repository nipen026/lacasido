import React from "react";
import img1 from "../../assets/23.jpg";
import img2 from "../../assets/24.jpg";
import img3 from "../../assets/25.jpg";

const ProductsSection = () => {
    return (
        <section className="w-full px-6 py-16">
            {/* TOP IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">

                {/* IMAGE 1 */}
                <div className="relative">
                    <img
                        src={img1}
                        alt="Hand Jewelry"
                        className="w-full h-[400px] object-cover rounded-2xl shadow"
                    />
                    <div className="absolute inset-0 bg-white opacity-40 rounded-2xl"></div>
                </div>

                {/* IMAGE 2 */}
                <div className="relative">
                    <img
                        src={img2}
                        alt="Hand Jewelry"
                        className="w-full h-[400px] object-cover rounded-2xl shadow"
                    />
                    <div className="absolute inset-0 bg-white opacity-40 rounded-2xl"></div>
                </div>

                {/* IMAGE 3 */}
                <div className="relative">
                    <img
                        src={img3}
                        alt="Hand Jewelry"
                        className="w-full h-[400px] object-cover rounded-2xl shadow"
                    />
                    <div className="absolute inset-0 bg-white opacity-40 rounded-2xl"></div>
                </div>

            </div>


            {/* CONTENT SECTION */}
            <div className="flex flex-col md:flex-row justify-around items-center mt-16">

                {/* LEFT CONTENT - FOR HER */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl tracking-wide font-medium">For HER :</h3>
                    <ul className="mt-4 space-y-2 text-lg">
                        <li>DIAMOND RING</li>
                        <li>BRACELET BAND</li>
                        <li>WATCH</li>
                        <li>NACKLES</li>
                        <li>EARRING</li>
                        <li>PENDENT</li>
                    </ul>
                </div>

                {/* CENTER TITLE */}
                <div className="text-center  tracking-wide mx-[100px] my-10 md:my-0">
                    <h1 className="text-7xl font-light leading-none">
                        Our <br /> Product’s
                    </h1>
                </div>

                {/* RIGHT CONTENT - FOR HIM */}
                <div className="text-center md:text-right">
                    <h3 className="text-xl tracking-wide font-medium">For HIM :</h3>
                    <ul className="mt-4 space-y-2 text-lg">
                        <li>DIAMOND RING</li>
                        <li>BRACELET BAND</li>
                        <li>WATCH</li>
                        <li>CHAIN</li>
                        <li>STUD EARRING</li>
                        <li>PENDENT</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default ProductsSection;
