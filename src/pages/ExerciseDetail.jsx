import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, ExerciseOptions, YoutubeOptions } from "../utils/fetchData";
import DetailExercises from "../components/DetailExercises";

const ExerciseDetail = () => {
  const params = useParams();
  const { id } = params;
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});

  useEffect(() => {
    const exeDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        ExerciseOptions
      );
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseData.name} exercise`,
        YoutubeOptions
      );
      setExerciseDetails(exerciseData);
      setExerciseVideos(exerciseVideosData.contents);
    };

    exeDetail();
  }, [id]);

  console.log(id);
  console.log(exerciseDetails);
  console.log(exerciseVideos);
  return (
    <div>
      <DetailExercises data={exerciseDetails} />
    </div>
  );
};

export default ExerciseDetail;
