import Home from "./Pages/Home";
import './App.css'
import { useEffect } from "react";
import ProductDetailPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import ShippingPage from "./Pages/ShippingPage";
import TrackOrderPage from "./Pages/TrackOrderPage";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./Pages/ProductListing";
import Login from "./Common/Login";
import Register from "./Common/Register";
import { ToastContainer } from "react-toastify";
import LoginSuccess from "./Components/LoginSuccess";
import MyAccount from "./Components/MyAccount";
import WishlistPage from "./Pages/WishlistPage";
import ReturnShippingPolicy from "./Components/ReturnShippingPolicy";
import AOS from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import ProtectedRoute from "./ProtectedRoute";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  useEffect(() => {
    const userPref = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPref === 'dark' || (!userPref && systemPrefersDark)) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Home/>}/>
      <Route path="/productDetails/:id" element={<ProductDetailPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/shipping" element={<ShippingPage/>}/>
      <Route path="/track" element={<TrackOrderPage/>}/>
      <Route path="/productListing" element={<ProductListing/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/account" element={<MyAccount/>}/>
      <Route path="/login/success" element={<LoginSuccess />} />
      <Route path="/returnPolicy" element={<ReturnShippingPolicy />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/productDetails/:id" element={<ProductDetailPage />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route path="/returnPolicy" element={<ReturnShippingPolicy />} />

        {/* Protected Routes below */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shipping"
          element={
            <ProtectedRoute>
              <ShippingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/track"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
