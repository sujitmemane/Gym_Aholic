import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  const hoveredLinkClass = "text-[#2d2e32]";
  return (
    <div className="flex flex-row justify-between items-center container px-4 mx-auto md:px-14 py-8">
      <Link to="/">
        <h1 className="text-3xl  md:text-4xl  text-[#6557fd] special">
          GymAholic{" "}
        </h1>
      </Link>
      <div className="flex flex-row space-x-16 text-xl md:text-2xl font-[400]   text-[#6557fd]">
        <a
          href="#exercises"
          className="hover:text-[#2d2e32] transition-all duration-500"
        >
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
