import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ gifUrl, name, exerciseId }) => {
  useEffect(() => {}, [exerciseId]);
  return (
    <Link to={`/exercises/${exerciseId}`}>
      <div className="flex flex-col justify-between items-center cursor-pointer p-8 border-3 hover:shadow-md">
        <img src={gifUrl} className="h-48 w-48" />
        <h1 className="text-sm font-bold capitalize ">{name}</h1>
      </div>
    </Link>
  );
};

export default ExerciseCard;
