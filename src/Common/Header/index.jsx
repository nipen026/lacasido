import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoMdExit } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("access-token");

  const toggleDropdown = (menu) => {
    setActiveMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  // close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll when menu open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [mobileMenu]);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow">

      {/* TOP MARQUEE */}
      <div className="bg-primary text-black text-sm py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
          <span className="font-medium">
            Premium Diamond Jewelry – Crafted to Perfection ,
          </span>
          <span className="font-medium">New Diamond Collection Now Live ,</span>
          <span className="font-medium">
            Explore Rings, Necklaces, Bracelets & More
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center mx-4 md:mx-12 lg:mx-32 py-4">

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          aria-label="open menu"
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(true)}
        >
          <FaBars />
        </button>

        {/* LEFT MENU (DESKTOP) */}
        <ul
          className={`hidden md:flex gap-6 text-sm ${showSearch ? "opacity-0" : "opacity-100"}`}
        >
          <li
            onClick={() => navigate("/")}
            className="hover:text-primary cursor-pointer font-medium text-[16px]"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/aboutus")}
            className="hover:text-primary cursor-pointer font-medium text-[16px]"
          >
            About Us
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="hover:text-primary cursor-pointer font-medium text-[16px]"
          >
            Contact Us
          </li>
        </ul>

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-[150px] cursor-pointer" />
        </Link>

        {/* RIGHT MENU (DESKTOP) */}
        <ul
          className={`hidden md:flex gap-6 text-sm ${showSearch ? "opacity-0" : "opacity-100"}`}
        >
          {/* MEN DROPDOWN */}
          <li className="group relative cursor-pointer font-medium text-[16px]">
            Men's
            <div
              className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50
              opacity-0 invisible translate-y-4 scale-95
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
              transition-all duration-300 ease-out"
            >
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Diamond Ring
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Bracelet Band
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Watch
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Chain
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Stud Earring
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Pendent
              </Link>
            </div>
          </li>

          {/* LADIES */}
          <li className="group relative cursor-pointer font-medium text-[16px]">
            Ladies
            <div
              className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50
              opacity-0 invisible translate-y-4 scale-95
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
              transition-all duration-300 ease-out"
            >
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Diamond Ring
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Bracelet Band
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Watch
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Necklace
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Earring
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Pendent
              </Link>
            </div>
          </li>

          {/* DIAMONDS */}
          <li className="group relative cursor-pointer font-medium text-[16px]">
            Diamonds
            <div
              className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50
              opacity-0 invisible translate-y-4 scale-95
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
              transition-all duration-300 ease-out"
            >
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Diamond Rings
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Engagement Rings
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Solitaire
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Bracelet Band
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Earrings
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Pendent
              </Link>
            </div>
          </li>
        </ul>

        {/* RIGHT ICONS (MOBILE) */}
        <div className="flex md:hidden gap-4 text-xl">
          <FaSearch onClick={() => setShowSearch(!showSearch)} className="cursor-pointer" />
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      {/* backdrop + animated drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden pointer-events-none transition-colors duration-300
          ${mobileMenu ? "bg-black/40 pointer-events-auto" : "bg-transparent"}`}
        onClick={() => setMobileMenu(false)}
        aria-hidden={!mobileMenu}
      >
        {/* panel */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full w-72 bg-white p-6 shadow-lg transform transition-transform duration-400
            ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <img src={logo} className="w-[120px]" alt="logo" />
            <button
              aria-label="close menu"
              className="text-2xl"
              onClick={() => setMobileMenu(false)}
            >
              <FaTimes />
            </button>
          </div>

          <ul className="space-y-4 text-lg font-medium">
            <li onClick={() => { navigate("/"); setMobileMenu(false); }}>Home</li>
            <li onClick={() => { navigate("/aboutus"); setMobileMenu(false); }}>About Us</li>
            <li onClick={() => { navigate("/contactus"); setMobileMenu(false); }}>Contact Us</li>

            {/* MEN */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("men")}
              >
                <span>Men's</span>
                <span>{activeMobileDropdown === "men" ? "-" : "+"}</span>
              </div>

              <div
                className={`ml-4 space-y-2 text-sm overflow-hidden transition-all duration-300
                  ${activeMobileDropdown === "men" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
              >
                <p><Link to="/">Diamond Ring</Link></p>
                <p><Link to="/">Bracelet Band</Link></p>
                <p><Link to="/">Watch</Link></p>
                <p><Link to="/">Chain</Link></p>
                <p><Link to="/">Stud Earring</Link></p>
                <p><Link to="/">Pendent</Link></p>
              </div>
            </li>

            {/* LADIES */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("ladies")}
              >
                <span>Ladies</span>
                <span>{activeMobileDropdown === "ladies" ? "-" : "+"}</span>
              </div>

              <div
                className={`ml-4 space-y-2 text-sm overflow-hidden transition-all duration-300
                  ${activeMobileDropdown === "ladies" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
              >
                <p><Link to="/">Diamond Ring</Link></p>
                <p><Link to="/">Bracelet Band</Link></p>
                <p><Link to="/">Watch</Link></p>
                <p><Link to="/">Necklace</Link></p>
                <p><Link to="/">Earring</Link></p>
                <p><Link to="/">Pendent</Link></p>
              </div>
            </li>

            {/* DIAMONDS */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("diamonds")}
              >
                <span>Diamonds</span>
                <span>{activeMobileDropdown === "diamonds" ? "-" : "+"}</span>
              </div>

              <div
                className={`ml-4 space-y-2 text-sm overflow-hidden transition-all duration-300
                  ${activeMobileDropdown === "diamonds" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
              >
                <p><Link to="/">Diamond Rings</Link></p>
                <p><Link to="/">Engagement Rings</Link></p>
                <p><Link to="/">Solitaire</Link></p>
                <p><Link to="/">Bracelet Band</Link></p>
                <p><Link to="/">Earrings</Link></p>
                <p><Link to="/">Pendent</Link></p>
              </div>
            </li>
          </ul>

          <hr className="my-4" />

          {/* MOBILE BOTTOM OPTIONS */}
          <div className="mt-4">
            {token ? (
              <div className="flex items-center gap-3">
                <IoMdExit className="text-lg" />
                <button onClick={handleLogout} className="text-sm">Logout</button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link to="/login" onClick={() => setMobileMenu(false)} className="block">Login</Link>
                <Link to="/signup" onClick={() => setMobileMenu(false)} className="block">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className={`transition-all duration-500 ${showSearch ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-4 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;


