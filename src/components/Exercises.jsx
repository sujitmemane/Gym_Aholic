import React from "react";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ exercises }) => {
  console.log(exercises);
  return (
    <div className="container mx-auto border my-8 p-4 ">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 border-5  border-red mx-auto border gap-8 ">
          {exercises.map((exercise) => (
            <ExerciseCard
              gifUrl={exercise.gifUrl}
              name={exercise.name}
              exerciseId={exercise.id}
            ></ExerciseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
