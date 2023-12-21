import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Discover = () => {
  const [type, setType] = useState("movie");
  const [genreId, setGenreId] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  console.log(selectedGenre);

  const [discover, setDiscover] = useState([]);

  //   const currentDate = new Date();
  //   const currentYear = currentDate.getFullYear();

  // getting the genre ids
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
      `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => setGenreId(response.genres))
      .catch((err) => console.error(err));
  }, [type]);

  // fetching the actual page data

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQ5NWE4NDBlNGNmOWZhNTQxN2Y2OTE0OWQxOWI1NCIsInN1YiI6IjY1NzYwNDc2NGJmYTU0MDBmZTdlYzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-mplgaCBdxChn8mKdQ-ufW73SMrQL3Qqkq3bUxsz4",
      },
    };

    let url = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`;
    if (selectedGenre) {
      url += `&with_genres=${selectedGenre}`;
    }
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setDiscover(response.results))
      .catch((err) => console.error(err));
  }, [type, selectedGenre]);

  return (
    <section className="max-w-[1500px] pt-10 px-5 lg:px-36 text-white">
      <div className="flex flex-row justify-between flex-wrap">
        <h2 className="text-white text-xl md:text-2xl font-bold">Discover</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <label htmlFor="filterViews" className="text-sm">
            Filter by:
          </label>
          <div>
            <select
              id="filterViews"
              className="bg-lightBlack"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="movie" className="cursor-pointer">
                Movie
              </option>
              <option value="tv" className="cursor-pointer">
                Series
              </option>
            </select>
          </div>
          <div>
            <select
              id="filterViews"
              className="bg-lightBlack"
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genreId.map((genreId) => {
                return (
                  <option key={genreId.id} value={genreId.id}>
                    {genreId.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div>
        <div
          id="movieResults"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-5"
        >
          {discover.map((disc) => {
            return (
              <Link key={disc.id} to={`/movie/${disc.id}`}>
                <div className="relative rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out">
                  <div
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 100%)",
                      width: "100%", // Set the width to 100%
                      height: "100%", // Set the height to 100%
                      position: "absolute",
                      borderRadius: "inherit", // Make sure it matches the parent's border radius
                    }}
                  ></div>
                  <img
                    src={`http://image.tmdb.org/t/p/original/${disc.poster_path}`}
                    alt=""
                    className="rounded-xl h-[350px] w-[100%] bg-center object-cover bg-cover"
                  />
                  <div className="absolute rounded-full w-[50px] h-[50px] bg-lightBlack right-2 top-2 flex justify-center items-center">
                    <p className="text-white bg-red flex justify-center items-center w-[40px] h-[40px] rounded-full">
                      {disc.vote_average.toFixed(1)}
                    </p>
                  </div>
                  <h2 className="absolute bottom-[10px] left-[10px]">
                    {type === "tv" ? disc.name : disc.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
