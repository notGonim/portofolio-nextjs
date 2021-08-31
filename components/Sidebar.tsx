import React from "react";
import { FiGithub, FiTwitch, FiLinkedin } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
export const Sidebar = () => {
  return (
    <div className="Poppins">
      <img
        src="https://pbs.twimg.com/profile_images/1424005296394018817/nWcSZdOU_400x400.jpg"
        alt="profile image"
        className="w-32 h-32 mx-auto rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wide text-blue-600">
        Gonim
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Frontend Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        download="gonim"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
        <a href="">
          <FiGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FiTwitch className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FiLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-4 bg-gray-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-end justify-center space-x-2">
          <GoLocation /> <span>Cairo,Egypt </span>
        </div>
        <p className="my-2">mghonamie@gmail.com</p>
        <p className="my-2">+201062235196</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white bg-blue-800 rounded-full focus:outline-none"
        onClick={() => window.open("mailto:mghonamie@gmail.com")}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white bg-blue-800 rounded-full ">
        Toggle Theme
      </button>
    </div>
  );
};
