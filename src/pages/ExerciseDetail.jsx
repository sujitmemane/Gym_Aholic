import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, ExerciseOptions } from "../utils/fetchData";
import DetailExercises from "../components/DetailExercises";

const ExerciseDetail = () => {
  const params = useParams();
  const { id } = params;
  const [exerciseDetails, setExerciseDetails] = useState({});

  useEffect(() => {
    const exeDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        ExerciseOptions
      );

      setExerciseDetails(exerciseData);
    };

    exeDetail();
  }, [id]);

  console.log(exerciseDetails);

  return (
    <div>
      <DetailExercises data={exerciseDetails} />
    </div>
  );
};

export default ExerciseDetail;
