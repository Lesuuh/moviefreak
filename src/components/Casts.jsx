export const Casts = ({ cast }) => {
  return (
    <div className="w-[100%] lg:w-[75%]">
      <h1 className="font-bold text-xl pb-5">ALL CASTS</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {cast.map(
          (actor) =>
            actor.known_for_department === "Acting" && (
              <div key={actor.id}>
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/original/${actor.profile_path}`}
                    alt=""
                    className="w-[250px] h-[250px] rounded-xl"
                  />
                </div>
                <h2>
                  {actor.original_name} <i>as</i> <span className="text-red">{actor.character}</span>
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};
