import React from "react";
import { FiGithub, FiTwitch, FiLinkedin } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
export const Sidebar = () => {
  return (
    <div>
      <img
        src="https://pbs.twimg.com/profile_images/1424005296394018817/nWcSZdOU_400x400.jpg"
        alt="profile image"
      />
      <h3>
        <span>Mahmoud</span>
        Gonim
      </h3>
      <p>Frontend Engineer</p>
      <p>Download Resume</p>
      {/* Social Icons */}
      {/* ADDRESS*/}
      <div className="">
        <div className="">
          <span>Cairo,Egypt </span>
        </div>
        <p>mghonamie@gmail.com</p>
        <p>+201062235196</p>
      </div>
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
};
