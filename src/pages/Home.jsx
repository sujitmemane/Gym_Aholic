import React, { useState } from "react";
import Hero from "../components/Hero";
const Dummy_Data = [
  {
    bodyPart: "biceps",
    equipment: "dumbbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0436.gif",
    id: "0436",
    name: "dumbbell curl",
    target: "biceps",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0658.gif",
    id: "0658",
    name: "bent-over barbell row",
    target: "middle back",
  },
  {
    bodyPart: "chest",
    equipment: "body only",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0225.gif",
    id: "0225",
    name: "plyometric push-up",
    target: "chest",
  },
  {
    bodyPart: "triceps",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0384.gif",
    id: "0384",
    name: "cable overhead triceps extension",
    target: "triceps",
  },
  {
    bodyPart: "shoulders",
    equipment: "dumbbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0857.gif",
    id: "0857",
    name: "dumbbell lateral raise",
    target: "shoulders",
  },

  {
    bodyPart: "abs",
    equipment: "body only",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0244.gif",
    id: "0244",
    name: "mountain climber",
    target: "abs",
  },
];
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  const [exercises, setExercises] = useState(Dummy_Data);

  return (
    <div>
      <Hero />
      <SearchExercises setExercises={setExercises} />
      {exercises.length === 0 ? (
        "No Results Found"
      ) : (
        <Exercises exercises={exercises} />
      )}
    </div>
  );
};

export default Home;
