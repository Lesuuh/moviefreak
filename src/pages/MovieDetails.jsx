import { useEffect, useState } from "react";
// import { RiStarSFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { Casts } from "../components/Casts";
import { MovieProp } from "../components/MovieProp";

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [cast, setCast] = useState([]);
  console.log(cast);

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

  // getting the credits/casts
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQ5NWE4NDBlNGNmOWZhNTQxN2Y2OTE0OWQxOWI1NCIsInN1YiI6IjY1NzYwNDc2NGJmYTU0MDBmZTdlYzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-mplgaCBdxChn8mKdQ-ufW73SMrQL3Qqkq3bUxsz4",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCast(response.cast))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getMovieDetails();
  }, []); // Include an empty dependency array to run the effect only once

  return (
    <div className="max-w-[1500px] relative">
      <div className="text-white relative">
        <div className="relative">
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0% , rgba(0,0,0,0.7) 100%)",
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
            }}
            className="absolute"
          ></div>
          <img
            src={`http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            alt=""
            className="h-[150vh] md:h-[90vh] bg-center object-cover bg-cover w-full"
          />
        </div>
        <div className="absolute top-1/2  transform -translate-y-1/2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 lg:px-36">
            <img
              src={`http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt=""
              className="h-[300px] md:h-[400px] rounded-xl bg-center object-cover bg-cover"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl lg:text-4xl font-bold">
                {movieDetails.original_title}
              </h1>
              <h2 className="flex items-center gap-1 text-xl font-bold">
                <FaStar className="text-red text-2xl" />
                {movieDetails.vote_average}
              </h2>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white px-5 lg:px-36 items-start gap-10 flex flex-col-reverse lg:flex-row pt-10">
        <Casts cast={cast} />
        <MovieProp movieDetails={movieDetails} />
      </div>
    </div>
  );
};
