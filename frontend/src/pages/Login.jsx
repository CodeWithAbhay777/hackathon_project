import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Login Box */}
      <div className="w-full max-w-md bg-transparent backdrop-blur-none rounded-2xl shadow-none p-8 z-20">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="h-6 mr-2"
          />
          <span className="text-xl font-semibold">
            YouTuber
            <br />
            Community
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 white">Log in</h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <FaEnvelope className="mr-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm text-white"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <FaEnvelope className="mr-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm text-white"
            />
          </div>

          <div className="text-right text-sm text-gray-400 hover:underline cursor-pointer hover:scale-105 transition-transform duration-200">
            Forgot password?
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer text-white font-semibold shadow-lg"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-500">OR</div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2 bg-white text-black rounded-md shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <span className="text-blue-400 hover:underline cursor-pointer hover:scale-105 transition-transform duration-200 inline-block">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
