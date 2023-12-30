// import { useEffect, useState } from "react";
import { RiPlayCircleFill, RiStarSFill } from "react-icons/ri";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";


export const Hero = () => {
  const [popular, setPopular] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQ5NWE4NDBlNGNmOWZhNTQxN2Y2OTE0OWQxOWI1NCIsInN1YiI6IjY1NzYwNDc2NGJmYTU0MDBmZTdlYzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-mplgaCBdxChn8mKdQ-ufW73SMrQL3Qqkq3bUxsz4",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setPopular(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-full max-w-[1500px] mx-auto  bg-black h-auto lg:h-[100dvh]  relative">
      <Splide
        className=""
        options={{
          perPage: 1,
          rewind: true,
          isNavigation: true,
          arrows: true,
          autoplay: true,
          interval: "3000",
          pagination: false,
        }}
      >
        {popular.map((pop) => {
          return (
            <SplideSlide key={pop.id} className="h-auto">
              <div className="text-white py-5 mt-5">
                <div
                  className="imge"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%), url('http://image.tmdb.org/t/p/original/${pop.backdrop_path}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -50,
                  }}
                ></div>
                <div className="flex gap-5 my-24 flex-col justify-between items-start px-5 lg:px-36 ">
                  <h3 className="bg-red px-2 py-1 rounded-xl">Now Playing</h3>
                  <h1 className="lg:text-5xl text-3xl font-bold text-red">
                    {pop.original_title}
                  </h1>
                  <p>{pop.overview}</p>
                  <p>{pop.release_date} | 16+ |</p>
                  {/* <p>{pop.genre_ids}</p> */}
                  <h2 className="flex text-3xl items-center">
                    <RiStarSFill className="bg-#FCC209 text-2xl" />
                    {pop.vote_average.toFixed(1)}
                    {/* <StarRating rating={pop.vote_average / 2} /> */}
                  </h2>
                  <button className="bg-red flex flex-row justify-center items-center box-shadow w-[150px] h-[50px] cursor-pointer text-white py-2 rounded-xl">
                    <RiPlayCircleFill className="text-2xl" />
                    View Details
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};
