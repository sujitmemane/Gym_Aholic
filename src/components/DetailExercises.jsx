import React from "react";

import { GiBiceps } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
const DetailExercises = ({ data }) => {
  return (
    <div className="contianer mx-auto">
      <div className="flex flex-col md:flex-row  items-center md:items-center justify-between space-x-8  md:p-12">
        <div className="w-full md:w-1/2  flex items-center justify-center ">
          <img src={data.gifUrl} loading="lazy" className="w-2/3" />
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className="text-center font-[500] my-2 text-xl text-[#6557fd] capitalize">
            {data.name}
          </h1>
          <p>
            This exercise 🏋️‍♀️ {data.name} is one of the best exercise , is 💪one
            of the best exercises out there! It specifically targets your
            {data.target}, helping to develop that particular body part
            🏋️‍♂️.Incorporating this exercise into your workout routine can yield
            amazing results 🙌!
          </p>
          <div className="flex flex-col items-start justify-between space-y-4  my-4">
            <div className="flex flex-row space-x-4 capitalize items-center">
              <GiBiceps size={30} color="#6557fd" className=" cursor-pointer" />{" "}
              <h1 className="text-md font-[500]">{data.bodyPart}</h1>
            </div>
            <div className="flex flex-row space-x-4 capitalize items-center">
              <FaTools size={30} color="#6557fd" className=" cursor-pointer" />
              <h1 className="text-md font-[500]">{data.equipment}</h1>
            </div>
            <div className="flex flex-row space-x-4 capitalize items-center">
              <ImTarget size={30} color="#6557fd" className=" cursor-pointer" />

              <h1 className="text-md font-[500]">{data.target}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailExercises;
