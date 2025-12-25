import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem('access-token');

export const REGISTER = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}auth/register`,data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const LOGIN = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}auth/login`,data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const ADD_INQUIRY = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/api/inquiries`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const ADD_CONTACT = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/api/contact-us`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const ADD_CART = (data) =>{
    return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}cart/addCart`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
export const ADD_WISHLIST = (data) =>{
    return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}wishlist/add`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
export const ADD_ADDRESS = (data) =>{
    return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}addresses/add`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
export const ADD_ORDER = (data) =>{
    return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}orders/addOrder`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err)); 
  });
}
export const UPDATE_CART = (id,data) =>{
    return new Promise((resolve, reject) => {
    axios
      .put(`${base_url}cart/updateCart/${id}`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err)); 
  });
}



// ------------------------------------ DELETE -------------------

export const DELETE_CART = (id) =>{
    return new Promise((resolve, reject) => {
    axios
      .delete(`${base_url}cart/DeleteCartById/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
export const DELETE_WISHLIST = (id) =>{
    return new Promise((resolve, reject) => {
    axios
      .delete(`${base_url}wishlist/remove/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}