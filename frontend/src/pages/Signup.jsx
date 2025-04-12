import React from "react";
import { FaUser, FaEnvelope, FaLock, FaLink } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f2d] to-black text-white px-4 overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          className="min-w-full min-h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        {/* Optional overlay to make text more readable */}
      </div>

      {/* Content Container */}
      <div className="w-full max-w-md bg-transparent backdrop-blur-none rounded-2xl shadow-none p-8 z-20">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="h-6 mr-2"
          />
          <span className="text-xl font-semibold leading-tight">
            YouTuber
            <br />
            Community
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 to-white">
          Sign up
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 hover:scale-105 hover:border-gray-400">
            <FaUser className="mr-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 hover:scale-105 hover:border-gray-400">
            <FaEnvelope className="mr-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 hover:scale-105 hover:border-gray-400">
            <FaLock className="mr-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 hover:scale-105 hover:border-gray-400">
            <FaLock className="mr-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 bg-[#12122e] transition-all duration-300 hover:scale-105 hover:border-gray-400">
            <FaLink className="mr-3 text-gray-400" />
            <input
              type="url"
              placeholder="YouTube Channel Link"
              className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
            />
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start space-x-2 text-sm text-gray-300">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-blue-400 underline">
                Terms and Conditions
              </a>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:scale-105 transition-all text-white font-semibold shadow-lg hover:from-red-600 hover:via-pink-600 hover:to-blue-600"
          >
            Sign up
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
