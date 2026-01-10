import React, { useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { GET_WISHLIST } from '../../api/get';
// import wishlistImage from '../../assets/wishlisht.jpg'
import { DELETE_WISHLIST } from '../../api/post';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getWishList()
  }, []);

  const getWishList = () => {
    GET_WISHLIST()
      .then((res) => {
        if (res?.data?.success) {
          const formatted = res.data.wishlist.map((item) => {
            const variant = item.product?.variants?.[0]; // Use first variant if available
            return {
              id: item.productId,
              name: item.product?.productName || 'Unnamed Product',
              price: variant?.salePrice || 0,
              image: variant?.images?.[0] || '/images/placeholder.png',
              size: variant?.size || [],
              color: variant?.color || '',
            };
          });
          setWishlistItems(formatted);
        }
      })
      .catch((err) => {
        console.log('❌ Failed to fetch wishlist:', err);
      });
  }

  const handleRemoveWishList = (id) =>{
    DELETE_WISHLIST(id).then((res)=>{
      console.log(res);
      getWishList()
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
     
    </div>
  );
};

export default Wishlist;
