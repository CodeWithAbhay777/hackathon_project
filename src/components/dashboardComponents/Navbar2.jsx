import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";

const Navbar2 = ({ channelName, changeNavOpen }) => {
  return (
    <div className="sticky z-10 top-0 h-[4.5rem] w-full bg-linear-to-bl from-gray-800 to-black flex items-center justify-between">
      <div className="w-[16rem] flex items-center justify-evenly h-full">
        <div
          onClick={changeNavOpen}
          className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-600/20 transition-colors cursor-pointer"
        >
          <CgMenuLeftAlt className="text-3xl text-white" />
        </div>
        <h1 className="text-white text-2xl">{channelName}</h1>
      </div>

      <div className="mr-4 h-[3rem] w-[3rem] rounded-[50%] hover:border-1 hover:border-orange-500 flex items-center justify-center cursor-pointer">
        <BsPersonCircle className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default Navbar2;
