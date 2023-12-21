import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  console.log(movieDetails);

  let { id } = useParams();

  const getMovieDetails = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQ5NWE4NDBlNGNmOWZhNTQxN2Y2OTE0OWQxOWI1NCIsInN1YiI6IjY1NzYwNDc2NGJmYTU0MDBmZTdlYzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-mplgaCBdxChn8mKdQ-ufW73SMrQL3Qqkq3bUxsz4",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      const data = await response.json(); // Don't forget to await here
      setMovieDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []); // Include an empty dependency array to run the effect only once

  return <div className="text-white">
    
  </div>;
};
