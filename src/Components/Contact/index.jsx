import React from "react";

export default function Contact() {
    return (
        <>
            <section className="w-full  py-20 px-6 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/your-jewellery-bg.jpg')" }}>
                <div className="max-w-4xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide text-black mb-2">
                        Contact Our Jewellery Experts
                    </h2>
                    <p className="text-center text-gray-700 mb-10">
                        Have questions or want to inquire? Connect with us directly on WhatsApp.
                    </p>

                    {/* Card */}
                    <div className="backdrop-blur-lg bg-white border border-white/20 rounded-2xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] p-8 md:p-10">

                        <form className="space-y-6">

                            {/* Name */}
                            <div>
                                <label className="text-gray-700 text-sm">Your Name</label>
                                <input type="text" placeholder="Enter your full name"
                                    className="mt-1 w-full p-3 border rounded-xl bg-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring focus:ring-yellow-500/40" />
                            </div>

                            {/* Email / Contact */}
                            <div>
                                <label className="text-gray-700 text-sm">Email / Contact Number</label>
                                <input type="text" placeholder="Enter email or phone"
                                    className="mt-1 w-full p-3 border rounded-xl bg-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring focus:ring-yellow-500/40" />
                            </div>

                            {/* Company */}
                            <div>
                                <label className="text-gray-700 text-sm">Company / Business Name</label>
                                <input type="text" placeholder="Your company name"
                                    className="mt-1 w-full p-3 border rounded-xl bg-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring focus:ring-yellow-500/40" />
                            </div>

                            {/* Country */}
                            <div>
                                <label className="text-gray-700 text-sm">Country</label>
                                <input type="text" placeholder="Where are you from?"
                                    className="mt-1 w-full p-3 border rounded-xl bg-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring focus:ring-yellow-500/40" />
                            </div>

                            {/* Interested Product */}
                            <div>
                                <label className="text-gray-700 text-sm">Interested Product</label>
                                <input type="text" placeholder="Gold jewellery, diamond set, etc."
                                    className="mt-1 w-full p-3 border rounded-xl bg-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring focus:ring-yellow-500/40" />
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 rounded-xl bg-primary hover:bg-primary-600 transition text-black font-medium text-lg shadow-lg"
                            >
                                Send Inquiry on WhatsApp
                            </a>

                        </form>

                    </div>
                </div>
            </section>

        </>
    )

}