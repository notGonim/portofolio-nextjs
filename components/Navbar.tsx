import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-blue-800">{name}</span>
      </a>
    </Link>
  ) : null;
};

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/resume") setActiveItem("Resume");
    if (pathname === "/projects") setActiveItem("Projects");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3 Poppins">
      <span className="text-4xl font-bold text-blue-900 border-b-4 border-blue-700 md:text-2xl" >
        {activeItem}
      </span>
      <div className="flex space-x-5 text-xl ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};
