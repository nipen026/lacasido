import React from 'react';
import ProductCard from '../../Common/ProductCard';
// import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div>
      {/* {products.map((product) => ( */}
        <ProductCard products={products} />
      {/* ))} */}
    </div>
  );
};


export default ProductGrid;
