import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ gifUrl, name, exerciseId }) => {
  useEffect(() => {
    
  }, [exerciseId]);
  return (
    <Link to={`/exercises/${exerciseId}`}>
      <div className="flex flex-col justify-between items-center cursor-pointer">
        <img src={gifUrl} />
        <h1 className="text-xl font-bold capitalize ">{name}</h1>
      </div>
    </Link>
  );
};

export default ExerciseCard;
