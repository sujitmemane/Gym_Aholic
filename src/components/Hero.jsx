import React from "react";
import HeroImg from "./../assets/hero.avif";
const Hero = () => {
  return (
    <div className="flex flex-row justify-between  items-center   container mx-auto px-12 space-x-12">
      <div className="md:w-3/5 ">
        <h1 className="text-6xl my-4 font-[800] text-[#403d39]  max-w-xl font-bold leading-18 shadow-sm heading ">
          <span className=" main-heading">
            Get Healty Body With The Perfect Exercises
          </span>
          ✌️
        </h1>
        <p className="mt-4 mb-12 font-[400] text-[#6c757d] text-xl max-w-md opacity-70 ">
          With our professional support, we will guide you with the best
          programs to help you get a healty and a ideal body.
        </p>
        <a className=" shadow-4xl px-8 py-4 bg-[#6557fd] font-[500] rounded text-md  text-white cursor-pointer hover:opacity-90">
          Explore Exercises
        </a>
      </div>
      <div className="md:w-2/5    flex items-center justify-center   ">
        <img src={HeroImg} className="  -mt-4  " />
      </div>
    </div>
  );
};

export default Hero;
