import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ADD_WISHLIST } from "../../api/post";
import { toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const [wishedProducts, setWishedProducts] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);


  console.log(products, "products");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const images = product.media?.filter((m) => m.type === "image") || [];
        const video = product.media?.find((m) => m.type === "video");
        if (images.length === 0) return null;
        return (
          <div
            key={product.id}
            className="group relative overflow-hidden"
          >
            {/* Image */}
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
                <button className="w-full hover:bg-black hover:text-white transition ease-in py-2 bg-primary font-semibold">
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

              <p className="text-black font-semibold mt-1">
                ₹{Number(product.price).toLocaleString()}
              </p>

              <p className="text-sm text-gray-500">
                {product.category?.name} • {product.color?.label ? product.color.label : product.color?.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
