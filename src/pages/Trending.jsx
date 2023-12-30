import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Trending = () => {
  const [type, setType] = useState("movie");
  const [day, setDay] = useState("day");
  const [trending, setTrending] = useState([]);

  console.log(trending);

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
      `https://api.themoviedb.org/3/trending/${type}/${day}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setTrending(response.results))
      .catch((err) => console.error(err));
  }, [type, day]);

  return (
    <section className="max-w-[1500px] pt-10 px-5 lg:px-36 text-white">
      <div className="flex flex-row justify-between flex-wrap">
        <h2 className="text-white text-xl md:text-2xl font-bold">
          Trending {type === "tv" ? "Series" : "Movies"}
        </h2>
        <div className="flex gap-5 items-center flex-wrap">
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
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="day" className="cursor-pointer">
                Day
              </option>
              <option value="week" className="cursor-pointer">
                Week
              </option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div
          id="movieResults"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-5"
        >
          {trending.map((trend) => {
            return (
              <Link key={trend.id} >
                <div className="relative rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out">
                  <div
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 100%)",
                    }}
                    className="absolute w-full h-full rounded-xl"
                  ></div>
                  <img
                    src={`http://image.tmdb.org/t/p/original/${trend.backdrop_path}`}
                    alt=""
                    className="rounded-xl h-[350px] bg-center object-cover bg-cover"
                  />
                  <div className="absolute rounded-full w-[50px] h-[50px] bg-lightBlack right-2 top-2 flex justify-center items-center">
                    <p className="text-white bg-red flex justify-center items-center w-[40px] h-[40px] rounded-full">
                      {trend.vote_average.toFixed(1)}
                    </p>
                  </div>
                  <h2 className="absolute bottom-[10px] left-[10px]">
                    {type === "tv" ? trend.name : trend.title}
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
