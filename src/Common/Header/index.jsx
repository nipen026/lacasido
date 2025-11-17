
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaTruck, FaHeart, FaBoxOpen } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { IoMdExit } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { GET_ALL_CART, GET_SEARCH_DATA } from '../../api/get';
import { InfinitySpin, Vortex } from 'react-loader-spinner';
import { useCart } from '../../Context/CartContext';


const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  // const [cartData, setCartData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cartData, getCart } = useCart();

  useEffect(() => {
    getCart(); // fetch cart data on load
  }, []);
  const userMenuRef = useRef(null);
  const token = localStorage.getItem('access-token');
  const navigate = useNavigate();

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access-token');
    window.location.reload();
  };


  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.length > 1) {
        fetchSearchResults(searchTerm);
      } else {
        setSearchResults([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const res = await GET_SEARCH_DATA(query);
      setSearchResults(res.data.products || []);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-secondary  shadow">
      <div className="bg-primary text-black text-sm py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center justify-end gap-6">
          {/* <FaTruck className="inline-block ml-4" /> */}
          <span className="font-medium">🚚 Free Shipping on Orders Over ₹1999</span>
          <span className="font-medium">✨ New Collection Launching</span>
          <span className="font-medium">🛍️ Shop Women’s Wear – Vigobee</span>
        </div>
      </div>

      <nav className="flex justify-between items-center mx-6 md:mx-12 lg:mx-20 py-4 relative">


        <ul className={`hidden md:flex gap-6 text-sm  ${showSearch ? 'opacity-0' : 'opacity-100'}`}>
          <li onClick={() => navigate('/productListing?latest=true')} className="hover:text-primary cursor-pointer font-medium text-[16px]">New Arrivals</li>
          <li onClick={() => navigate('/productListing?category=formal_wear')} className="hover:text-primary cursor-pointer font-medium text-[16px]">Formal Wear</li>
          <li onClick={() => navigate('/productListing?category=casual_wear')} className="hover:text-primary cursor-pointer font-medium text-[16px]">Casual Wear</li>
        </ul>
        <Link to={'/'}>
          <div className="flex items-center gap-2 text-primary font-bold text-lg ">
            <img src={logo} alt='logo' className='w-[150px]  object-cover cursor-pointer' />
          </div>
        </Link>
         <ul className={`hidden md:flex gap-6 text-sm  ${showSearch ? 'opacity-0' : 'opacity-100'}`}>
          <li onClick={() => navigate('/productListing?latest=true')} className="hover:text-primary cursor-pointer font-medium text-[16px]">New Arrivals</li>
          <li onClick={() => navigate('/productListing?category=formal_wear')} className="hover:text-primary cursor-pointer font-medium text-[16px]">Formal Wear</li>
          <li onClick={() => navigate('/productListing?category=casual_wear')} className="hover:text-primary cursor-pointer font-medium text-[16px]">Casual Wear</li>
        </ul>
        {/* <div className="flex gap-4 items-center  relative">
          <FaSearch onClick={() => setShowSearch(!showSearch)} className="cursor-pointer hover:text-primary" />
          <FaHeart onClick={() => navigate('/wishlist')} className="cursor-pointer text-red-600 hover:text-red-500" />

          {token ? (
            <>
              <div className="relative" ref={userMenuRef}>
                <FaUser onClick={() => setShowUserMenu(!showUserMenu)} className="cursor-pointer hover:text-primary" />
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white  shadow-lg rounded-md py-2 z-50">
                    <a href="/account" className="flex items-center gap-4 px-4 py-2 text-sm hover:bg-gray-100 ">
                      <FaUser /> My Account
                    </a>
                    <a href="/track" className="flex items-center gap-4 px-4 py-2 text-sm hover:bg-gray-100 ">
                      <FaBoxOpen /> My Orders
                    </a>
                    <a onClick={handleLogout} className="flex items-center gap-4 px-4 py-2 text-sm hover:bg-gray-100 ">
                      <IoMdExit /> Logout
                    </a>
                  </div>
                )}
              </div>
              {cartData.length > 0 ?
                <Link to={cartData.length > 0 ? '/cart' : '/'}>
                  <div className="relative">
                    <FaShoppingBag className="cursor-pointer hover:text-primary" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartData.length}
                    </span>
                  </div>
                </Link> : ''}
            </>
          ) : (
            <a href="/signin" className="text-sm px-4 py-1 rounded font-semibold border border-primary hover:text-primary hover:bg-white bg-primary text-white transition-all ease-in">Login</a>
          )}
        </div> */}
      </nav>

      <div className={`transition-all duration-500 ${showSearch ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-3 rounded-md border border-gray-300  bg-white  text-black "
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value); if (e.target.value.length > 0) {
                setLoading(true);
              } else {
                setLoading(false);
              }
            }}
          />
          {loading ?
            <div className='flex items-center justify-center'>
              <InfinitySpin
                visible={true}
                width="150"
                color="#0a4b3c"
                ariaLabel="infinity-spin-loading"
              />
            </div> : ''}
          {searchResults.length > 0 && (
            <>

              <div className="absolute left-6 right-6 bg-white  shadow-md rounded-md mt-2 z-50 max-h-60 overflow-y-auto">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setShowSearch(false);
                      setSearchTerm('');
                      navigate(`/productDetails/${product.id}`);
                    }}
                    className="flex gap-4 p-3 hover:bg-gray-100  cursor-pointer border-b "
                  >
                    <img src={product.variants?.[0].images?.[0]} alt={product.productName} className="w-14 h-14 object-cover rounded" />
                    <div>
                      <div className="font-medium text-sm">{product.productName}</div>
                      <div className="text-xs text-gray-500 ">Sizes: {product.variants?.[0]?.size?.join(', ') || 'N/A'}</div>
                      <div className="flex gap-1 mt-1">
                        {product.variants?.map((product, idx) => (
                          <span key={idx} className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: product?.color }}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
