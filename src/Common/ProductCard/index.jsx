import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ADD_WISHLIST } from "../../api/post";
import { toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const [wishedProducts, setWishedProducts] = useState([]);

  const handleAddWishList = (productId) => {
    ADD_WISHLIST({ productId })
      .then(() => {
        toast.success("Added to Wishlist");
        setWishedProducts((prev) => [...prev, productId]);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err?.response?.data?.message || "Failed to add wishlist");
      });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const images = product.media?.filter((m) => m.type === "image") || [];
        if (!images.length) return null;

        const isWished = wishedProducts.includes(product.id);

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
  );
};

export default ProductCard;
