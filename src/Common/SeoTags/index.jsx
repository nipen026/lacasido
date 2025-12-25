import React from "react";
import { Helmet } from "react-helmet-async";

const SeoTags = ({ product }) => {
  if (!product) return null;

  const title = `${product.name} | Lacasido`;
  const description = `Buy ${product.name} from Lacasido. ${product.description?.replace(/<[^>]+>/g, '').slice(0, 160)}...`;
  const keywords = [
    product.name,
    product.category,
    product.subCategory,
    product.brandName,
    product.productTypeTag,
    "Gen-Z clothing",
    "streetwear",
    "unisex fashion",
    "trendy wear",
    "affordable fashion",
  ]
    .filter(Boolean)
    .join(", ");

  const canonical = `https://Lacasido.com/productDetails/${product.id}`;
  const mainImage = product.variants?.[0]?.images?.[0] || "/default-image.jpg";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={mainImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="product" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={mainImage} />
    </Helmet>
  );
};

export default SeoTags;
