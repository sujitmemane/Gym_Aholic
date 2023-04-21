import React, { useState } from "react";

import { fetchData, ExerciseOptions } from "../utils/fetchData";

const SearchExercises = ({ setExercises }) => {
  const [search, setSearch] = useState("");

  const searchInputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const searchHandler = async () => {
    console.log("sam");
    if (search) {
      const ExerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );
      const searchedExercises = ExerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
      setSearch("");
    }
  };

  return (
    <div className="container mx-auto px-12 mt-24 ">
      <h1 className="text-2xl md:text-5xl main-heading text-center mx-auto font-[500] max-w-xl">
        Awesome Exercises You Should Know 🚀
      </h1>
      <div className=" mx-auto flex flex-row justify-center items-center mt-8">
        <input
          type="text"
          placeholder="Search Exercises ...."
          className="w-2/4 px-6 py-3 text-xs md:text-xl focus:outline-none "
          value={search}
          onChange={searchInputHandler}
        />
        <button
          className=" px-4 py-3 md:px-10 md:py-3 bg-[#6557fd] font-[500] rounded  text-xs md:text-md  text-white cursor-pointer hover:opacity-90"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchExercises;
