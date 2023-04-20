export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "0efa9736f1msh6c766df2f328a27p172326jsn1bfddb811d07",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const YoutubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/channel/about",
  params: { id: "UCE_M8A5yxnLfW0KghEeajjw" },
  headers: {
    "X-RapidAPI-Key": "0efa9736f1msh6c766df2f328a27p172326jsn1bfddb811d07",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
