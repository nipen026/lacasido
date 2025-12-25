import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoMdExit } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
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
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.lacasidojewellery.com/api/categories");
        const data = await res.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);
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
          className={`hidden md:flex gap-8 text-sm ${showSearch ? "opacity-0" : "opacity-100"
            }`}
        >
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/aboutus" },
            { label: "Contact Us", path: "/contactus" },
          ].map((item) => {
            const isActive = currentPath === item.path;

            return (
              <li
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`
                  relative cursor-pointer font-medium text-[16px]
                  transition-colors duration-300
                  ${isActive ? "text-black" : "text-black"}

                  after:content-['']
                  after:absolute after:-bottom-1 after:h-[2px] after:bg-black
                  after:transition-all after:duration-300 after:ease-out

                  ${isActive
                    ? "after:w-full after:left-0"
                    : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"
                  }
                `} >
                {item.label}
              </li>
            );
          })}
        </ul>


        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-[150px] cursor-pointer" />
        </Link>

        {/* RIGHT MENU (DESKTOP) */}
        <ul className="hidden md:flex gap-6">
          {categories.map((cat) => (
            <li key={cat.id} className="group relative cursor-pointer font-medium text-[16px]">
              {cat.name}
              {cat.subcategories && cat.subcategories.length > 0 && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50
                opacity-0 invisible translate-y-4 scale-95
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
                transition-all duration-300 ease-out"
                >
                  {cat.subcategories.map((sub) => (
                    <Link key={sub.id} to={`/productListing?category=${cat.id}&subcategory=${sub.id}`} className="block px-4 py-2 hover:bg-gray-100">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
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
            {categories.map((cat) => (
              <li key={cat.id}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(cat.name)}
                >
                  <span>{cat.name}</span>
                  <span>{activeMobileDropdown === cat.name ? "-" : "+"}</span>
                </div>

                {cat.subcategories && (
                  <div className={`ml-4 space-y-2 text-sm overflow-hidden transition-all duration-300
                ${activeMobileDropdown === cat.name ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                  >
                    {cat.subcategories.map((sub) => (
                      <p key={sub.id}>
                        <Link key={sub.id} to={`/productListing?category=${cat.id}&subcategory=${sub.id}`} className="block hover:bg-gray-100" onClick={() => setMobileMenu(false)}>
                          {sub.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
          <hr className="my-4" />

          {/* MOBILE BOTTOM OPTIONS */}
          {/* <div className="mt-4">
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
          </div> */}
        </div>
      </div>

      {/* SEARCH BOX */}
      {/* <div className={`transition-all duration-500 ${showSearch ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-4 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div> */}
    </header>
  );
};

export default Header;


