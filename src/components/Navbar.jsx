import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center container mx-auto px-14 py-8">
      <h1 className="text-4xl  text-[#6557fd] special">GymAholic 🏋️‍♂️</h1>
      <div className="flex flex-row space-x-16 text-2xl font-[400]   text-[#6557fd]">
        <Link
          to="/"
          className="hover:text-[#2d2e32] transition-all duration-500"
        >
          Home
        </Link>
        <Link
          to="/exercises"
          className="hover:text-[#2d2e32] transition-all duration-500"
        >
          Exercises
        </Link>
      </div>
    </div>
  );
};

export default Navbar;