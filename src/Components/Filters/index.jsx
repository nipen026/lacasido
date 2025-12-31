import React, { useEffect, useState } from 'react';
import { GET_CATEGORY, GET_DROPDOWNS_BY_TYPE } from '../../api/get';



const Filters = ({ filters, setFilters }) => {

  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [
          categoryRes,
          colorRes,
          materialRes,
          sizeRes,
        ] = await Promise.all([
          GET_CATEGORY(),
          GET_DROPDOWNS_BY_TYPE("color"),
          GET_DROPDOWNS_BY_TYPE("material"),
          GET_DROPDOWNS_BY_TYPE("size"),
        ]);

        setCategories(categoryRes.data?.data || []);
        setColors(colorRes.data?.data || []);
        setMaterials(materialRes.data?.data || []);
        setSizes(sizeRes.data?.data || []);
      } catch {
        toast.error("Failed to load filters");
      }
    };

    fetchFilters();
  }, []);
  const toggleFilter = (key, id) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(id)
        ? prev[key].filter((v) => v !== id)
        : [...prev[key], id],
    }));
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4 flex justify-between items-center px-2">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700  px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 "
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 18 10">
            <path d="M0 1h18M2.5 5h13M6.25 9h5.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`fixed  border-[1px] rounded-xl md:static top-[90px] left-0 z-40 bg-white  md:bg-transparent shadow-md md:shadow-none h-full md:h-auto w-72 md:w-full p-4 transition-transform duration-300 ease-in-out
        ${showFilters ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:block`}>

        <div className="space-y-6 overflow-y-auto md:overflow-visible max-h-[calc(100vh-80px)] md:max-h-none">

          {/* Category Filter */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Category</h4>

            {categories.map((cat) => (
              <div key={cat.id} className="mb-4">
                <p className="text-sm font-semibold text-gray-700">
                  {cat.name}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {cat.subcategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => toggleFilter("category_ids", sub.id)}
                      className={`px-3 py-1 rounded-full border text-xs
              ${filters.category_ids.includes(sub.id)
                          ? "bg-black text-white border-black"
                          : "border-gray-300 text-gray-700"
                        }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Price Filter */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Material</h4>

            <div className="flex flex-wrap gap-2">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => toggleFilter("material_ids", mat.id)}
                  className={`px-3 py-1 rounded border text-sm
          ${filters.material_ids.includes(mat.id)
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700"
                    }`}
                >
                  {mat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Size</h4>

            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => toggleFilter("size_ids", size.id)}
                  className={`px-3 py-1 rounded border text-sm
          ${filters.size_ids.includes(size.id)
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700"
                    }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Color</h4>

            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => toggleFilter("color_ids", color.id)}
                  className={`px-4 py-1 rounded border text-sm
          ${filters.color_ids.includes(color.id)
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700"
                    }`}
                >
                  {color.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Overlay for Mobile */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}
    </>
  );
};

export default Filters;


