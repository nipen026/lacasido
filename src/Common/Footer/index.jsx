import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#e9ddd0] py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className='mb-4'>
            <img src={logo} className=' h-20'/>
          </div>
          <p className="text-sm text-black">
            Crafting timeless elegance with diamonds, gemstones & luxury fine jewellery.
          </p>
        </div>

        {/* General Links */}
        <div>
          <h4 className="font-semibold text-black text-lg mb-4">General Links</h4>
          <ul className="space-y-2 text-sm text-black">
            <li className='hover:underline transition ease-in'><a href="/aboutus">About Us</a></li>
            <li className='hover:underline transition ease-in'><a href="/productListing">Collections</a></li>
            <li className='hover:underline transition ease-in'><a href="/productListing">Diamond Rings</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-black text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-black">
            <li className="flex items-center gap-2">
              <FaEnvelope /> vav1vaghasiya10@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 9727390998
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-black text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4 text-black text-lg">
            <a href="https://instagram.com/lacasido_jewel" target='_blank'><FaInstagram /></a>
            <a href="#" target='_blank'><FaFacebookF /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-black">
        © 2025 Lacasido Jewellery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
