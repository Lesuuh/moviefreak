export const MovieProp = ({ movieDetails }) => {
  // Check if genres is defined and is an array
  const genres =
    movieDetails.genres && Array.isArray(movieDetails.genres)
      ? movieDetails.genres
      : [];

  const genresDisplay = genres.map((genre) => genre.name).join(",");

  return (
    <div className="w-[100%] lg:w-[25%] bg-lightBlack rounded-xl flex flex-wrap flex-row lg:flex-col  gap-5 px-10 py-5">
      <div>
        <h2 className="text-xl font-bold">GENRES:</h2>
        <p>{genresDisplay}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">RELEASE:</h2>
        <h3>{movieDetails.release_date}</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">RATING:</h2>
        <h3>{movieDetails.vote_average}</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">POPULARITY:</h2>
        <h3>{movieDetails.popularity}</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">REVENUE:</h2>
        <h3>{movieDetails.revenue == 0 ? "N/A" : movieDetails.revenue}</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">STATUS:</h2>
        <h3>{movieDetails.status}</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">RUNTIME:</h2>
        <h3>{movieDetails.runtime} Mins</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">TAGLINE:</h2>
        <h3>{movieDetails.tagline}</h3>
      </div>
    </div>
  );
};
