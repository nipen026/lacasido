import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
// import loginBg from '../../assets/login.jpg';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';
import { REGISTER } from '../../api/post';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { auth, provider } from '../../firebase';
// import { signInWithPopup } from 'firebase/auth';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        number: '',
        role: 'user',
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGoogleRegister = async () => {
        {
            import.meta.env.VITE_NODE === 'local' ?
                window.location.href = "http://localhost:5000/api/auth/google" : window.location.href = "https://valloria-fashion-backend.onrender.com/api/auth/google";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await REGISTER(formData);
            // console.log('Registration success:', res.data);
            toast.success('Registration successfully')
            navigate('/signin')
            // Redirect or show success
        } catch (err) {
            toast.error(err.response?.data || err);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Banner */}
            <div className="w-1/2 bg-cover hidden md:block" >
                <div className="bg-black bg-opacity-40 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl font-extrabold mb-4 animate-typing whitespace-nowrap overflow-hidden">
                        Join Vigo<span className='text-yellow'>&nbsp;Bee</span>
                    </h1>
                    <p className="text-white text-lg max-w-md">
                        Create your account and explore timeless styles.
                    </p>
                </div>
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl text-center font-bold mb-6">
                        Register on <span className="text-primary">Vigo<span className='text-yellow'>&nbsp;Bee</span></span>
                    </h2>

                    <button
                        onClick={handleGoogleRegister}
                        className="w-full flex items-center justify-center bg-white hover:bg-primary hover:text-white border border-primary text-primary py-2 px-4 rounded mb-4 gap-4"
                    >
                        <FcGoogle className="text-xl" />
                        Sign up with Google
                    </button>

                    <div className="flex items-center justify-between mb-4">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                        <input
                            type="text"
                            name="number"
                            placeholder="Phone Number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
                            >
                                {showPassword ? <FaEye /> : <FaEyeLowVision />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-white hover:text-primary border border-primary text-white py-2 rounded"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-4 text-center">
                        Already have an account? <a href="/signin" className="text-yellow hover:underline">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
