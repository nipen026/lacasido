import React, { useEffect, useMemo, useRef, useState } from "react";
import { GET_PRODUCT } from "../../api/get";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_LOAD = 8;
const MAX_ITEMS = 20;

const categories = ["All", "Men's", "Women's", "Diamonds"];

const NewArrivals = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const observerRef = useRef(null);
  const navigate = useNavigate();

  /* ================= Fetch Products ================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await GET_PRODUCT();
        setAllProducts(res.data?.data || []);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };
    fetchProducts();
  }, []);

  /* ================= Filter by Category ================= */
const filteredProducts = useMemo(() => {
  return allProducts.filter((product) => {
    if (activeCategory === "All") return true;
    return product.category?.name === activeCategory;
  });
}, [allProducts, activeCategory]);

  /* ================= Load Products ================= */
useEffect(() => {
  const end = Math.min(page * ITEMS_PER_LOAD, MAX_ITEMS);
  setVisibleProducts(filteredProducts.slice(0, end));
}, [filteredProducts, page]);

  /* ================= Infinite Scroll ================= */
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          visibleProducts.length < Math.min(filteredProducts.length, MAX_ITEMS)
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [visibleProducts, filteredProducts]);

  /* ================= Category Change ================= */
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <section className="py-12 bg-[#fffcf8]">
      <div className="container mx-auto px-4">

        {/* ===== Title ===== */}
        <h2 className="text-3xl text-center font-semibold mb-6">
          Trending Now
        </h2>

        {/* ===== Categories ===== */}
        <div className="flex justify-center gap-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`pb-1 text-sm font-medium border-b-2 transition ${
                activeCategory === cat
                  ? "border-black text-black"
                  : "border-transparent text-gray-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== Products Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => {
            const images = product.media?.filter((m) => m.type === "image");
            if (!images?.length) return null;

            return (
              <div
                key={product.id}
                className="group relative overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-72 overflow-hidden">
                  <img
                    src={images[0].url}
                    alt={product.name}
                    onClick={() =>
                      navigate(`/productDetails/${product.id}`, {
                        state: product,
                      })
                    }
                    className="w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                  />

                  {images[1] && (
                    <img
                      src={images[1].url}
                      alt="hover"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}

                  <div className="absolute inset-0 flex items-end bg-black/10 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() =>
                        navigate(`/productDetails/${product.id}`, {
                          state: product,
                        })
                      }
                      className="w-full py-2 bg-primary text-black font-semibold hover:bg-black hover:text-white"
                    >
                      VIEW
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-medium">
                    {product.name.length > 25
                      ? product.name.slice(0, 25) + "..."
                      : product.name}
                  </h3>

                  <p className="text-black font-semibold mt-1">
                    ₹{Number(product.price).toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-500">
                    {product.category?.name} • {product.color?.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Observer ===== */}
        {visibleProducts.length < Math.min(filteredProducts.length, MAX_ITEMS) && (
          <div ref={observerRef} className="h-10" />
        )}

        {/* ===== Show More ===== */}
        {/* {visibleProducts.length >= MAX_ITEMS && ( */}
          <button
            className="border-2 border-black px-10 py-2 mt-10 mx-auto flex items-center gap-2 hover:bg-black hover:text-white transition"
            onClick={() => navigate("/productListing?latest=true")}
          >
            SHOW MORE <FaChevronRight />
          </button>
        {/* )} */}
      </div>
    </section>
  );
};

export default NewArrivals;
