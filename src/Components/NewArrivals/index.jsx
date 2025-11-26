import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_PRODUCT } from '../../api/get';
import { FaChevronRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ADD_WISHLIST } from '../../api/post';
import { toast } from 'react-toastify';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [isWished, setIsWished] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await GET_PRODUCT();
        setProducts(res.data.products || []);
      } catch (err) {
        console.error('Failed to load products:', err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddWishList = (product) => {
    const bodyData = {
      productId: product?.id,
    };
    ADD_WISHLIST(bodyData)
      .then((res) => {
        toast("Added In Wishlist");
        setIsWished(true);
        setShake(true);
        setTimeout(() => setShake(false), 500); // reset shake after animation
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <section className="py-10 bg-[#fffcf8]  transition-colors">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Row */}
        <div className=" gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl text-center font-semibold text-black ">
            Trending Now
          </h2>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const variant = product.variants?.[0];
            if (!variant) return null;

            return (
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                key={variant.id}
                className="group relative    overflow-hidden transition-all"
              >
                {/* Wishlist Icon */}
                <div className="absolute top-[-40px] left-4 group-hover:top-4 transition-all duration-300 z-10">
                  <button
                    className={`bg-white p-1 md:p-2 rounded-full shadow hover:scale-105 transition-transform ${shake ? "animate-shake" : ""
                      }`}
                    onClick={() => handleAddWishList(product)}
                  >
                    {isWished ? (
                      <FaHeart size={18} className="text-red-500" />
                    ) : (
                      <FaRegHeart size={18} className="text-red-500" />
                    )}
                  </button>

                </div>
                <div className="absolute top-[-40px] left-4 group-hover:top-4 transition-all duration-300 z-10">
                  <button
                    className={`bg-white p-1 md:p-2 rounded-full shadow hover:scale-105 transition-transform ${shake ? "animate-shake" : ""
                      }`}
                    onClick={() => handleAddWishList(product)}
                  >
                    {isWished ? (
                      <FaHeart size={18} className="text-red-500" />
                    ) : (
                      <FaRegHeart size={18} className="text-red-500" />
                    )}
                  </button>

                </div>

                {/* Product Image */}
                {/* IMAGE CONTAINER WITH HOVER OVERLAY */}
                <div className="relative w-full h-58 sm:h-72 md:h-80 overflow-hidden">

                  {/* PRODUCT IMAGE */}
                  <img
                    onClick={() => navigate(`productDetails/${product.id}`)}
                    src={variant.images?.[0]}
                    alt={product.productName}
                    className="w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:scale-110 
               group-hover:opacity-0"
                  />

                  {/* HOVER IMAGE (SECOND IMAGE) */}
                  {variant.images?.[1] && (
                    <img
                      src={variant.images?.[1]}
                      alt="hover"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300"
                    />
                  )}

                  {/* OVERLAY BUTTONS */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end gap-3 
               bg-black/10 opacity-0 group-hover:opacity-100 
               transition-all duration-300 "
                  >
                    {/* ADD TO CART BUTTON */}
                    <button
                      onClick={() => navigate(`productDetails/${product.id}`)}
                      className="w-full py-2 bg-primary text-black font-semibold shadow 
                 hover:bg-black hover:text-white transition"
                    >
                      ADD TO CART
                    </button>

                    {/* QUICK VIEW BUTTON */}

                  </div>
                </div>
                {/* Product Details */}
                <div className="p-4 text-center">
                  <h3>
                    {product.productName.length > 25
                      ? product.productName.substring(0, 25) + '...'
                      : product.productName}
                  </h3>
                  <p className=''>
                    {variant.salePrice ? (
                      <>
                        <span className="text-black font-semibold">Rs.{variant.salePrice}.00</span>
                      
                      </>
                    ) : (
                      <span className="text-black font-semibold">₹{variant.mrp}</span>
                    )}
                  </p>
                  </div>
              </div>
            );
          })}
        </div>
        <button
          className="cursor-pointer group border-2 border-black px-10 py-2 mt-8 mx-auto flex items-center gap-2  hover:bg-black hover:text-white  transition"
          onClick={() => navigate('/productListing?latest=true')}
        >
          <p className="flex items-center gap-2  font-medium">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              SHOW MORE
            </span>
            <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </p>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
