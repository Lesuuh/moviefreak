import { Link } from "react-router-dom";

export const Similar = ({ similar }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl py-5">SIMILAR MOVIES</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {similar.map((sim) => {
          return (
            <Link key={sim.id} to={`/movie/${sim.id}`}>
              <div className="relative rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out">
                <div
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 100%)",
                  }}
                  className="absolute w-full h-full rounded-xl"
                ></div>
                <img
                  src={`http://image.tmdb.org/t/p/original/${sim.backdrop_path}`}
                  alt=""
                  className="rounded-xl h-[350px] bg-center object-cover bg-cover"
                />
                <div className="absolute rounded-full w-[50px] h-[50px] bg-lightBlack right-2 top-2 flex justify-center items-center">
                  <p className="text-white bg-red flex justify-center items-center w-[40px] h-[40px] rounded-full">
                    {sim.vote_average.toFixed(1)}
                  </p>
                </div>
                <h2 className="absolute bottom-[10px] left-[10px]">
                  {sim.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
