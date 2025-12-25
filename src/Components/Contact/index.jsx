import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ADD_CONTACT } from "../../api/post";

const API_URL = "/api/contact-us"; // 👈 your backend route

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await ADD_CONTACT(form);

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full py-20 px-6 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/your-jewellery-bg.jpg')" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide text-black mb-2">
          Contact Our Jewellery Experts
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Have questions? Send us a message and we’ll get back to you shortly.
        </p>

        {/* Card */}
        <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-2xl shadow-xl p-8 md:p-10">

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label className="text-gray-700 text-sm">Your Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 text-sm">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-700 text-sm">Phone (Optional)</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 text-sm">Message *</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-primary text-black font-medium text-lg hover:opacity-90 transition shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
