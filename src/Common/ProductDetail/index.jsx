import React, { useEffect, useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { FaGlobe, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import SeoTags from "../SeoTags";
import { ADD_INQUIRY } from "../../api/post";
import { toast } from "react-toastify";

const WHATSAPP_NUMBER = "919999999999";

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state;

    const [mainImage, setMainImage] = useState("");
    const [isZoomed, setIsZoomed] = useState(false);
    const [openInquiry, setOpenInquiry] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    /* ================= IMAGE AUTO CHANGE + FADE ================= */
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [fade, setFade] = useState(false);





    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        interested_product_id: product?.id || "",
        message: "",
        source: "whatsapp",
    });

    /* ================= VALIDATION ================= */
    const validateInquiry = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            newErrors.email = "Valid email required";
        if (!form.phone.match(/^\d{10,15}$/))
            newErrors.phone = "Phone must be 10–15 digits";
        if (!form.country.trim()) newErrors.country = "Country is required";
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ================= IMAGE ================= */
    useEffect(() => {
        if (product?.media?.length) {
            const img = product.media.find((m) => m.type === "image");
            setMainImage(img?.url || "");
        }
    }, [product]);

    if (!product) {
        return (
            <div className="h-screen flex justify-center items-center">
                <InfinitySpin width="300" color="#223333" />
            </div>
        );
    }

    const images = product.media.filter((m) => m.type === "image");

    /* ================= SUBMIT ================= */
    const handleSubmitInquiry = async () => {
        if (!validateInquiry()) {
            toast.error("Please fix the errors");
            return;
        }

        try {
            setLoading(true);
            await ADD_INQUIRY(form);
            toast.success("Inquiry submitted successfully");
            setOpenInquiry(false);
            setForm({
                name: "",
                email: "",
                phone: "",
                country: "",
                interested_product_id: product.id,
                message: "",
                source: "whatsapp",
            });
            setErrors({});
        } catch (err) {
            toast.error("Failed to submit inquiry");
        } finally {
            setLoading(false);
        }
    };

    const safeDescription = product.description?.includes("<")
        ? product.description
        : `<p>${product.description}</p>`;
    useEffect(() => {
        if (images.length === 0) return;

        setMainImage(images[0].url); // initial image

        const interval = setInterval(() => {
            setFade(true); // start fade out
            setTimeout(() => {
                setMainImageIndex((prev) => (prev + 1) % images.length);
                setFade(false); // fade in new image
            }, 300); // fade duration
        }, 3000); // change image every 4 seconds

        return () => clearInterval(interval);
    }, [images]);
    useEffect(() => {
        if (images.length > 0) setMainImage(images[mainImageIndex].url);
    }, [mainImageIndex, images]);
    return (
        <>
            <SeoTags product={product} />

            {/* ================= PRODUCT ================= */}
            <div className="bg-secondary min-h-screen px-4 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* IMAGES */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <img
                                src={mainImage}
                                alt={product.name}
                                className={`h-[450px] object-contain rounded shadow transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
                            />
                            <button
                                onClick={() => setIsZoomed(true)}
                                className="absolute top-2 right-2 bg-white p-2 rounded-full"
                            >
                                <MdOutlineZoomIn />
                            </button>
                        </div>

                        <div className="flex gap-3 flex-wrap justify-center">
                            {images.map((img) => (
                                <img
                                    key={img.id}
                                    src={img.url}
                                    onClick={() => setMainImage(img.url)}
                                    className={`w-16 h-16 object-cover rounded cursor-pointer ${mainImage === img.url ? "ring-2 ring-primary" : ""
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* INFO */}
                    <div>
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <div className="text-xl font-bold mt-2 flex items-end gap-2">
                            {/* {product.discount ? ( */}
                                {/* <> */}
                                    <span className="text-black text-2xl">₹{(product.price - (product.price * product.discount_value) / 100).toFixed(2)}</span>
                                    <span className="line-through text-[#615e5e] font-light text-sm">₹{product.price}</span>
                                {/* </> */}
                            {/* ) : ( */}
                                {/* <span>₹{product.price}</span> */}
                            {/* )} */}
                        </div>
                        <div className="text-sm  space-y-1 mt-2">
                            <p className="text-[#615e5e]">Category: {product.category?.name}</p>
                            <p className="text-[#615e5e]">Material: {product.material?.name}</p>
                            <p className="text-[#615e5e]">Color: {product.color?.name}</p>
                            <p className="text-[#615e5e]">Size: {product.size?.name}</p>
                            <p className="text-[#615e5e]">Weight: {product.weight} gm</p>
                        </div>

                        {/* DESCRIPTION */}
                        <div
                            className="prose prose-sm max-w-none text-gray-700 mt-6"
                            dangerouslySetInnerHTML={{ __html: safeDescription }}
                        />

                        <button
                            onClick={() => setOpenInquiry(true)}
                            className="w-full mt-6 border-2 border-primary flex items-center justify-center gap-2 py-3 hover:bg-black hover:text-white transition"
                        >
                            <FaWhatsapp /> Send Inquiry on WhatsApp
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= INQUIRY MODAL (TOP OPEN) ================= */}
            {openInquiry && (<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setOpenInquiry(false)} />
                {/* Modal */} <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl z-10 animate-scaleIn overflow-hidden">
                    {/* Header */} <div className="flex items-center justify-between px-6 py-4 border-b">
                        <h2 className="text-lg font-semibold text-gray-800"> Send Inquiry </h2>
                        <button onClick={() => setOpenInquiry(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition" > ✕ </button>
                    </div> {/* Body */}
                    <div className="p-6 space-y-4"> {/* Product Preview */} <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-lg">
                        <img src={mainImage} className="w-16 h-16 object-contain rounded" alt="" />
                        <div>
                            <p className="text-sm font-medium text-gray-800 line-clamp-1"> {product.name} </p>
                            <p className="text-xs text-gray-500">Interested Product</p>
                        </div>
                    </div> {/* Name */}
                        <div>
                            <label className="text-xs text-gray-500">Your Name</label>
                            <input className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-primary outline-none" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" /> {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>} </div> {/* Email */} <div> <label className="text-xs text-gray-500">Email</label> <input className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-primary outline-none" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@email.com" /> {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>} </div> {/* Phone + Country */} <div className="grid grid-cols-2 gap-3"> <div> <label className="text-xs text-gray-500">Phone</label> <input className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-primary outline-none" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="9876543210" /> {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>} </div> <div> <label className="text-xs text-gray-500">Country</label> <input className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-primary outline-none" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="India" /> </div> </div> {/* Message */} <div> <label className="text-xs text-gray-500">Message</label> <textarea rows="3" className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-primary outline-none resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="I’m interested in this product..." /> {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>} </div> {/* Source */} <div> <label className="text-xs text-gray-500">Source</label> <select className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-primary outline-none" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} > <option value="whatsapp">WhatsApp</option> <option value="website">Website</option> </select> </div> </div> {/* Footer */} <div className="p-6 border-t"> <button onClick={handleSubmitInquiry} className="w-full flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-primary text-black border-[1px] border-black py-3 font-medium hover:opacity-90 capitalize transition" > {form.source == 'whatsapp' ?<FaWhatsapp className="text-lg " /> : <FaGlobe className="text-lg " />} Send via {form.source} </button> </div> </div> </div>)}

            {/* ================= ZOOM ================= */}
            {isZoomed && (
                <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
                    <img src={mainImage} className="h-[500px] object-contain " />
                    <button
                        onClick={() => setIsZoomed(false)}
                        className="absolute top-6 right-6 text-white text-2xl"
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
