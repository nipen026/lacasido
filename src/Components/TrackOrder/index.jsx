// import React from 'react';
// import { FaCheckCircle, FaBox, FaTruck, FaMapMarkerAlt, FaClock, FaEnvelope, FaQuestion } from 'react-icons/fa';
// import  new_1 from '../../assets/new-1.png' 
// import  new_2 from '../../assets/new-2.png' 
// const TrackOrder = () => {
//   return (
//     <div className=" bg-secondary dark:bg-black text-black dark:text-white px-4 py-10">
//       <h1 className="text-2xl font-bold text-center mb-10">Track Your Order</h1>

//       {/* Status Progress */}
//       <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 max-w-5xl mx-auto mb-10">
//         <div className="grid grid-cols-4 text-center text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
//           <div className="flex flex-col items-center text-primary">
//             <FaCheckCircle size={22} />
//             <p>Order Confirmed</p>
//             <span className="text-xs font-normal">Order #VV78945612</span>
//           </div>
//           <div className="flex flex-col items-center text-primary">
//             <FaBox size={22} />
//             <p>Processing</p>
//             <span className="text-xs font-normal">Preparing your order</span>
//           </div>
//           <div className="flex flex-col items-center text-gray-400">
//             <FaTruck size={22} />
//             <p>Shipped</p>
//             <span className="text-xs font-normal">On the way</span>
//           </div>
//           <div className="flex flex-col items-center text-gray-400">
//             <FaCheckCircle size={22} />
//             <p>Delivered</p>
//             <span className="text-xs font-normal">Package received</span>
//           </div>
//         </div>
//         <div className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
//           <div className="h-full bg-primary w-1/2 transition-all duration-700" />
//         </div>

//         {/* Order Info Sections */}
//         <div className="grid md:grid-cols-2 gap-6 mt-10">
//           {/* Order Details */}
//           <div>
//             <h4 className="font-semibold mb-3">Order Details</h4>
//             <div className="flex items-center gap-4">
//               <img src={new_1} alt="product" className="w-20 h-20 object-cover" />
//               <div>
//                 <h5 className="font-medium">Classic Green Polo Shirt</h5>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Size: L | Qty: 1</p>
//                 <p className="font-semibold text-primary mt-1">$59.99</p>
//               </div>
//             </div>
//             <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
//               <p className="mb-1">Order Date: <span className="font-medium text-black dark:text-white">July 10, 2025</span></p>
//               <p>Expected Delivery: <span className="font-medium text-black dark:text-white">July 15, 2025</span></p>
//             </div>
//           </div>

//           {/* Delivery Info */}
//           <div>
//             <h4 className="font-semibold mb-3">Delivery Information</h4>
//             <div className="text-sm space-y-3 text-gray-600 dark:text-gray-400">
//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt />
//                 <span>123 Fashion Street, Style Avenue, New York, NY 10001</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaClock />
//                 <span>Estimated Time: 3-5 Business Days</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaEnvelope />
//                 <span>Updates Sent To: customer@example.com</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Support Section */}
//       <div className="max-w-5xl mx-auto bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg shadow text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//         <div>
//           <p className="font-medium text-black dark:text-white flex items-center gap-2 mb-1">Need Help <FaQuestion className='text-red-500' /> </p>
//           <p className="text-gray-600 dark:text-gray-400">Our customer service team is here to assist you with any questions.</p>
//         </div>
//         <div className="flex gap-3">
//           <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">Contact Support</button>
//           <button className="border px-4 py-2 rounded text-black dark:text-white dark:border-white">View FAQs</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackOrder;
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaBox,
  FaTruck,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaQuestion,
} from "react-icons/fa";
import axios from "axios";
import { GET_ORDER_BY_USERS } from "../../api/get";

const statusSteps = [
  { key: "confirmed", label: "Order Confirmed", icon: <FaCheckCircle size={22} /> },
  { key: "processing", label: "Processing", icon: <FaBox size={22} /> },
  { key: "shipping", label: "Shipped", icon: <FaTruck size={22} /> },
  { key: "delivered", label: "Delivered", icon: <FaCheckCircle size={22} /> },
];

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await GET_ORDER_BY_USERS();
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, []);

  const getStepIndex = (status) => {
    switch (status) {
      case "confirmed":
        return 0;
      case "processing":
        return 1;
      case "shipping":
        return 2;
      case "delivered":
        return 3;
      default:
        return 0;
    }
  };

  return (
    <div className=" bg-secondary  text-black  px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-10">My Orders</h1>

      {orders.map((order) => {
        const currentStep = getStepIndex(order.status);
        const orderItem = order.OrderItems[0];
        const product = orderItem?.Product;
        const variant = product?.variants?.[0];

        const productImage =
          variant?.images?.[0] || "https://via.placeholder.com/100";
        const productName = product?.productName || "Unknown Product";
        const quantity = orderItem?.quantity || 1;
        const productPrice = order.totalAmount;
        const patmentMethod = order.paymentStatus === 'cod' ? 'Cash on Delivery' : 'PREPAID';

        return (
          <div
            key={order.id}
            className="bg-white  rounded-lg shadow p-6 max-w-5xl mx-auto mb-10"
          >
            {/* Status Progress */}
            <div className="grid grid-cols-4 text-center text-sm font-medium mb-4">
              {statusSteps.map((step, idx) => (
                <div
                  key={step.key}
                  className={`flex flex-col items-center ${idx <= currentStep ? "text-primary" : "text-gray-400"
                    }`}
                >
                  {step.icon}
                  <p>{step.label}</p>
                  {idx === 0 && (
                    <span className="text-xs font-normal">Order #{order.id}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full h-2 bg-gray-200  rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-700"
                style={{ width: `${((currentStep + 1) / statusSteps.length) * 100}%` }}
              />
            </div>

            {/* Order Info Sections */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {/* Order Details */}
              <div>
                <h4 className="font-semibold mb-3">Order Details</h4>
                <div className="flex items-center gap-4">
                  <img
                    src={productImage}
                    alt="product"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h5 className="font-medium">{productName}</h5>
                    <p className="text-sm text-gray-500 ">
                      Qty: {quantity}
                    </p>
                    <div className="text-sm text-gray-500 ">
                      <p>Payment: <span className="font-medium text-black ">{patmentMethod}</span></p>
                    </div>
                    <p className="font-semibold text-primary mt-1">₹{productPrice}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 ">
                  <p className="mb-1">
                    Order Date:{" "}
                    <span className="font-medium text-black ">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                  <p>
                    Expected Delivery:{" "}
                    <span className="font-medium text-black ">
                      {product?.deliveryTime
                        ? `${product.deliveryTime} Days`
                        : "N/A"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Delivery Info */}
              <div>
                <h4 className="font-semibold mb-3">Delivery Information</h4>
                <div className="text-sm space-y-3 text-gray-600 ">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>
                      {order.shippingAddress
                        ? order.shippingAddress.split(",").slice(0, -2).join(", ")
                        : "Address not available"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>
                      Estimated Time: {product?.deliveryTime || "N/A"} Days
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope />
                    <span>
                      Any Issue : {"info@Lacasido.com"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Support Section */}
     <div className="max-w-5xl mx-auto bg-gray-100  p-6 rounded-lg shadow text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  <div>
    <p className="font-medium text-black  flex items-center gap-2 mb-1">
      Need Help <FaQuestion className="text-red-500" />
    </p>
    <p className="text-gray-600 ">
      Our customer service team is here to assist you with any questions.
    </p>
  </div>
  <div className="flex gap-3">
    {/* Contact Support button redirects to email */}
    <a href="mailto:info@Lacasido.com">
      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
        Contact Support
      </button>
    </a>

    {/* FAQs button (kept as is, you can link to FAQ page) */}
    {/* <button className="border px-4 py-2 rounded text-black dark:text-white dark:border-white">
      View FAQs
    </button> */}
  </div>
</div>

    </div>
  );
};


export default TrackOrder;
