import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import useLoading from "../components/useLoading";

export const SearchPage = () => {
  const { query } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        setLoading(true);
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQ5NWE4NDBlNGNmOWZhNTQxN2Y2OTE0OWQxOWI1NCIsInN1YiI6IjY1NzYwNDc2NGJmYTU0MDBmZTdlYzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-mplgaCBdxChn8mKdQ-ufW73SMrQL3Qqkq3bUxsz4",
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          options
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setSearchedMovies(data.results);
        setLoading(false);
      } catch (err) {
        setLoading(false)
        console.error("Error Fetching Data", err);
      }
    };

    fetchData();

  
  }, [query]);

  return (
    <div className="text-white mx-auto px-5 lg:px-36">
      <h2>Searched Result for {query}</h2>
      {loading ? (
        <h2 className="text-2xl font-bold mx-auto text-center py-16">
          Loading...
        </h2>
      ) : searchedMovies && searchedMovies.length > 0 ? (
        <div
          id="movieResults"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-5"
        >
          {searchedMovies.map((result) => (
            <Link key={result.id} to={`/movie/${result.id}`}>
              <div className="relative rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out">
                <div
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 100%)",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    borderRadius: "inherit",
                  }}
                ></div>
                <img
                  src={`http://image.tmdb.org/t/p/original/${result.poster_path}`}
                  alt=""
                  className="rounded-xl h-[350px] w-[100%] bg-center object-cover bg-cover"
                />
                <h2 className="absolute bottom-[10px] left-[10px]">
                  {result.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-2xl px-5 py-16">No Movies Found</p>
      )}
    </div>
  );
};
