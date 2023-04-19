import React, { useState } from "react";
import Hero from "../components/Hero";

import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
 
  return (
    <div>
      <Hero />
      <SearchExercises setExercises={setExercises} />
      <Exercises exercises={exercises} />
    </div>
  );
};

export default Home;
