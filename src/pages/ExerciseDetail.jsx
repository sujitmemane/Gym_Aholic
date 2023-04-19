import React from "react";
import { useParams } from "react-router-dom";
const ExerciseDetail = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  return <div>Exercise Details</div>;
};

export default ExerciseDetail;
