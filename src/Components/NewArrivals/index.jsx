import React, { useEffect, useMemo, useRef, useState } from "react";
import { GET_PRODUCT } from "../../api/get";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_LOAD = 8;
const MAX_ITEMS = 20;



const NewArrivals = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [hoveredId, setHoveredId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [activeCategoryId, setActiveCategoryId] = useState("all");


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
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.lacasidojewellery.com/api/categories");
        const data = await res.json();

        const parents = (data.data || []).filter(
          (c) => c.parent_id === null
        );

        setCategories(parents);
        setCategoryMap(buildCategoryMap(parents));
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const buildCategoryMap = (categories) => {
    const map = {};

    categories.forEach((parent) => {
      map[parent.id] = [
        parent.id,
        ...(parent.subcategories?.map((sub) => sub.id) || []),
      ];
    });

    return map;
  };


  /* ================= Filter by Category ================= */
  const filteredProducts = useMemo(() => {
    if (activeCategoryId === "all") return allProducts;

    const allowedCategoryIds = categoryMap[activeCategoryId] || [];

    return allProducts.filter((product) =>
      allowedCategoryIds.includes(product.category?.id)
    );
  }, [allProducts, activeCategoryId, categoryMap]);

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
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <button
            onClick={() => {
              setActiveCategoryId("all");
              setPage(1);
            }}
            className={`pb-1 border-b-2 ${activeCategoryId === "all"
              ? "border-black text-black"
              : "border-transparent text-gray-400"
              }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategoryId(cat.id);
                setPage(1);
              }}
              className={`pb-1 border-b-2 ${activeCategoryId === cat.id
                ? "border-black text-black"
                : "border-transparent text-gray-400"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>


        {/* ===== Products Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.length === 0 && (
            <p className="col-span-4 text-center text-gray-500">
              No products found.
            </p>
          )}
          {visibleProducts.map((product) => {
            const images = product.media?.filter((m) => m.type === "image") || [];
            const video = product.media?.find((m) => m.type === "video");
            if (images.length === 0) return null;

            return (
              <div key={product.id} className="group relative overflow-hidden">
                <div
                  className="relative w-full h-72 cursor-pointer overflow-hidden"
                  onClick={() => {

                    navigate(`/productDetails/${product.id}`, { state: product });
                  }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Primary image */}
                  <img
                    src={images[0].url}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
      ${hoveredId === product.id && video ? "opacity-0" : "opacity-100"}
    `}
                  />
                  {video && hoveredId === product.id && (
                    <video
                      src={video.url}
                      muted
                      playsInline
                      autoPlay
                      loop
                      preload="none"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Hover image */}
                  {images[1] && (
                    <img
                      src={images[1].url}
                      alt="hover"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}

                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-end bg-black/10 opacity-0 group-hover:opacity-100 transition">
                    <button className="w-full py-2 hover:bg-black hover:text-white transition ease-in bg-primary font-semibold">
                      VIEW
                    </button>
                  </div>

                  {/* 🎥 Video badge (optional, UX only) */}

                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-medium capitalize">
                    {product.name.length > 25
                      ? product.name.slice(0, 25) + "..."
                      : product.name}
                  </h3>
                  <p className="font-semibold mt-1">
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
