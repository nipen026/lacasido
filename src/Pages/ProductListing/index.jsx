import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from '../../Components/Filters';
import ProductGrid from '../../Components/ProductGrid';
import Header from '../../Common/Header';
import Banner from '../../Components/Banner';
import Footer from '../../Common/Footer';
import { GET_FILTER_PRODUCT, GET_PRODUCT } from '../../api/get';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import queryString from 'query-string';
import Loader from '../../Common/Loader';

const ProductListing = () => {
  const [filters, setFilters] = useState({
    category_ids: [],   // subcategory IDs
    color_ids: [],
    material_ids: [],
    size_ids: [],
    price: [],
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { category, subcategory } = queryString.parse(location.search);
  // Fetch products from your API
  useEffect(() => {
    const fetchProducts = async () => {
      // if (!category) return;
      setLoading(true);
      try {
        const response = category ? await GET_FILTER_PRODUCT(subcategory ? subcategory : category) : await GET_PRODUCT();

        setProducts(response.data.data || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, subcategory]);

  // Apply category and price filters
  const filteredProducts = products.filter((product) => {
   const catMatch = filters.category_ids.length
  ? filters.category_ids.includes(product.category_id)
  : true;


    const variant = product.variants?.[0];
    const price = variant?.salePrice || 0;

    const priceMatch = filters.price.length
      ? filters.price.some((p) => price <= p)
      : true;

    return catMatch && priceMatch;
  });

  // --- SEO Auto Generation ---
  // -------- SEO AUTO GENERATION (JEWELLERY) --------

  const baseBrand = "Lacasido Jewellery";

  const hasCategoryFilter = filters.category_ids.length > 0;

  const seoTitle = hasCategoryFilter
    ? `Buy Premium Jewellery Online in India | ${baseBrand}`
    : `Fine Diamond & Gold Jewellery Online | ${baseBrand}`;

  const seoDescription = hasCategoryFilter
    ? `Explore premium diamond, gold, and silver jewellery at ${baseBrand}. Shop rings, necklaces, bracelets, earrings & more with certified quality and elegant designs.`
    : `Shop fine diamond, gold & silver jewellery online at ${baseBrand}. Discover elegant rings, necklaces, pendants, bracelets and timeless jewellery designs for every occasion.`;

  const seoKeywords = [
    "Lacasido Jewellery",
    "online jewellery store India",
    "diamond jewellery",
    "gold jewellery",
    "silver jewellery",
    "rings",
    "necklaces",
    "earrings",
    "bracelets",
    "pendants",
    "certified jewellery",
    "luxury jewellery online",
    "buy jewellery online",
  ].join(", ");


  return (
    <>
      {loading ? <Loader /> : (
        <>
          {/* SEO Tags */}
          <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />

            {/* Open Graph for social sharing */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            {products[0]?.variants?.[0]?.images?.[0] && (
              <meta property="og:image" content={products[0].variants[0].images[0]} />
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
          </Helmet>

          <Header />
          <Banner />

          {/* Products Section */}
          <div className="mx-5 mb-5">
            <div className="">

              {/* Page Title */}
              <div className="my-8 text-center">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-900">
                  Fine Jewellery Collection
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                  Discover timeless diamond, gold & silver jewellery
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

                {/* Filters */}
                <aside className="md:sticky md:top-24 h-fit">
                  <Filters filters={filters} setFilters={setFilters} />
                </aside>

                {/* Products */}
                <section className="min-h-[400px] transition-all duration-500">

                  {/* Product Count */}
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-600">
                      Showing <span className="font-medium">{filteredProducts.length}</span> products
                    </p>
                  </div>

                  {/* Product Grid */}
                  {filteredProducts.length > 0 ? (
                    <ProductGrid products={filteredProducts} />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <p className="text-lg font-medium text-gray-700">
                        No jewellery found
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Try adjusting your filters or explore other categories
                      </p>
                    </div>
                  )}
                </section>

              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default ProductListing;
