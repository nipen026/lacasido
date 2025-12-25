import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem('access-token')

export const GET_PRODUCT = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/api/products`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const GET_PRODUCT_BY_ID = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}products/getProductById/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_FILTER_PRODUCT = (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}/api/products/by-category/${query}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_ALL_CART = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}cart/getAllCart`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_MY_ACCOUNT = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}user/account`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_WISHLIST = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}wishlist`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_SEARCH_DATA = (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}products/search?q=${query}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_COUPONS = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}coupons/getAllCoupon`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_REVIEW_BY_PRODUCT = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}reviews/${id}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const GET_ORDER_BY_USERS = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${base_url}orders/getAllOrder`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};