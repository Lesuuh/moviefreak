import { useEffect, useState } from "react";

export const Discover = () => {
  const [type, setType] = useState("movie");
  const [genre, setGenre] = useState("action");
  console.log(genre);

  const [discover, setDiscover] = useState([]);

//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();

  console.log(discover);

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
      `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genre}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDiscover(response.results))
      .catch((err) => console.error(err));
  }, [type, genre]);

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
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="action" className="cursor-pointer">
                Action
              </option>
              <option value="adventure" className="cursor-pointer">
                Adventure
              </option>
              <option value="animation" className="cursor-pointer">
                Animation
              </option>
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
              <div
                key={disc.id}
                className="relative rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out"
              >
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
                <h2 className="absolute bottom-[10px] left-[10px]">
                  {type === "tv" ? disc.name : disc.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
