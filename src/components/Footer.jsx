import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-white  ">
          <h1 className="text-white text-2xl cursor-pointer">GymAholic</h1>
          <h2 className="text-white font-bold">
            Developed By
            <a
              href="https://twitter.com/iAmSujitMemane"
              target="_blank"
              className=" text-[#6557fd]"
            >
              The Sujit Memane
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
