import React from "react";
import HeroImg from "./../assets/hero.avif";
import HeroImg2 from "./../assets/hero2.jpg";
const Hero = () => {
  return (
    <div className="flex space-y-4 flex-col-reverse md:flex-row justify-between  items-center mt-4  container mx-auto px-4 md:px-12 md:space-x-12">
      <div className="md:w-3/5  w-full   ">
        <h1 className=" text-center md:text-left text-4xl md:text-6xl my-4 font-[800] text-[#403d39] max-w-sm  md:max-w-xl font-bold leading-18 shadow-sm heading ">
          <span className=" main-heading">
            Get Healty Body With The Perfect Exercises
          </span>
          ✌️
        </h1>
        <p className=" text-center md:text-left text-md md:text-xl mt-4 mb-12 font-[400] text-[#6c757d]  max-w-sm md:max-w-md opacity-70 ">
          With our professional support, we will guide you with the best
          programs to help you get a healty and a ideal body.
        </p>
        <div className="flex justify-center md:justify-start">
          <a className=" text-center shadow-4xl px-8 py-4 bg-[#6557fd] font-[500] rounded text-md  text-white cursor-pointer hover:opacity-90">
            Explore Exercises
          </a>
        </div>
      </div>
      <div className=" md:w-2/5 w-full    flex items-center justify-center   ">
        <img src={HeroImg} className="  hidden md:block " />
        <img src={HeroImg2} className=" w-full  md:hidden h-84 " />
      </div>
    </div>
  );
};

export default Hero;
