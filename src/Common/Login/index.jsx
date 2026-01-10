import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
// import { auth, provider } from '../../firebase'; // make sure firebase.js is configured
// import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
// import loginBg from '../../assets/login.jpg';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';
import { LOGIN } from '../../api/post';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    // ✅ Email & Password Login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic client-side validation
        if (!email || !password) {
            setError('Email and Password are required.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        const data = {
            email: email,
            password: password
        }
        try {
            const res = await LOGIN(data);
            toast.success('Login successfully');
            navigate('/');
            localStorage.setItem('access-token', res.data.token)
            // redirect or save token if needed
        } catch (err) {
            setError(err?.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    // ✅ Google Login
    const handleGoogleLogin = async () => {
        setError('');
        {
            import.meta.env.VITE_NODE === 'local' ?
            window.location.href = "http://localhost:5000/api/auth/google" : window.location.href = "https://valloria-fashion-backend.onrender.com/api/auth/google";
        }

    };

    return (
        <div className="flex min-h-screen">

            {/* Left Banner */}
            <div className="w-1/2 bg-cover hidden md:block" >
                <div className="bg-black bg-opacity-40 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-5xl font-extrabold mb-4 animate-typing whitespace-nowrap overflow-hidden ">
                        Welcome to Vigo<span className='text-yellow'>&nbsp;Bee</span>
                    </h1>
                    <p className="text-white text-lg max-w-md">
                        Redefining style. One outfit at a time.
                    </p>
                </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl text-center font-bold mb-6">
                        Login to <span className="text-primary">Vigo<span className='text-yellow'>&nbsp;Bee</span></span>
                    </h2>

                    {error && (
                        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center bg-white hover:bg-primary hover:text-white border border-primary text-primary py-2 px-4 rounded mb-4 gap-4"
                    >
                        <FcGoogle className="text-xl" />
                        Sign in with Google
                    </button>

                    <div className="flex items-center justify-between mb-4">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            Sign In
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-4 text-center">
                        Don’t have an account? <a href="/register" className="text-yellow hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
