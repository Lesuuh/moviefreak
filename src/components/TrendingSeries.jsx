import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { RiPlayFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const TrendingSeries = () => {
  const [trendingseries, setTrendingseries] = useState([]);
  // console.log(trendingseries);

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
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setTrendingseries(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className=" w-full  max-w-[1500px] mx-auto  text-white  px-5 py-10">
      <h2 className="text-xl text-red font-semibold py-5 flex enter">
        <RiPlayFill className="text-2xl text-white" />
        Trending Series
      </h2>
      <div>
        <Splide
          options={{
            type: "loop",
            rewind: true,
            autoplay: true,
            perMove: 1,
            perPage: 5,
            gap: "1rem",
            arrows: true,
            pagination: false,
            breakpoints: {
              475: {
                perPage: 1,
              },
              740: {
                perPage: 2,
              },
              1000: {
                perPage: 3,
              },
              1100: {
                perPage: 4,
              },
            },
            // autoScroll: {
            //   pauseOnHover: true,
            //   pauseOnFocus: false,
            //   speed: 2,
            // },
          }}
          // extensions={{ AutoScroll }}
        >
          {trendingseries.map((trendingseries) => {
            return (
              <>
                <SplideSlide
                  key={trendingseries.id}
                  className="relative rounded-xl"
                >
                  <Link
                    key={trendingseries.id}
                    to={`/movie/${trendingseries.id}`}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 100%)",
                      }}
                      className="absolute w-full h-full rounded-xl"
                    ></div>
                    <div className="absolute top-2 right-2 w-[50px] h-[50px] bg-lightBlack rounded-full flex justify-center items-center">
                      <p className="bg-red w-[40px] h-[40px] rounded-full flex justify-center items-center ">
                        {trendingseries.vote_average.toFixed(1)}
                      </p>
                    </div>
                    <h3 className="absolute bottom-1 left-1 px-2 font-bold ">
                      {trendingseries.name}
                    </h3>
                    <div>
                      <img
                        src={`http://image.tmdb.org/t/p/original/${trendingseries.backdrop_path}`}
                        alt={trendingseries.title}
                        className=" h-[400px] bg-cover object-cover bg-center rounded-xl"
                      />
                    </div>
                  </Link>
                </SplideSlide>
              </>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};
