import React from "react";
import member1 from '../../assets/21.jpg';
import member2 from '../../assets/22.jpg';
const OurTeam = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-4 tracking-wide">
                    Meet Our Craft Masters
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
                    At <span className="font-semibold text-[#d4af37]">Lacasido Jewellery </span>,
                    our excellence is shaped by passionate professionals who turn inspiration into
                    breathtaking diamond artistry.
                </p>
                {/* 2 Member Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Member 1 */}
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300">
                        <img
                            src={member1}
                            alt="Team Member"
                            className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#d4af37] shadow"
                        />
                        <h3 className="text-2xl font-semibold mt-6">VAIBHAV VAGHASIYA</h3>
                        <p className="text-[#d4af37] font-medium text-lg">MD & CEO</p>
                        <p className="text-gray-600 mt-4 text-sm">
                            Leading Lacasido with a vision for innovation and luxury, Vaibhav oversees
                            the creation of exquisite diamond jewellery that blends craftsmanship,
                            precision, and timeless elegance.
                        </p>
                    </div>

                    {/* Member 2 */}
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300">
                        <img
                            src={member2}
                            alt="Team Member"
                            className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#d4af37] shadow"
                        />
                        <h3 className="text-2xl font-semibold mt-6">DHUPAL PATEL</h3>
                        <p className="text-[#d4af37] font-medium text-lg uppercase">Lead Designer</p>
                        <p className="text-gray-600 mt-4 text-sm">
                            A specialist in modern diamond aesthetics, Dhupal crafts designs that combine
                            creativity with detailed craftsmanship, ensuring every piece reflects the
                            true essence of luxury.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default OurTeam;