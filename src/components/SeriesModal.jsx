export default function SeriesModal({
  selectedSerie,
  setSelectedSerie,
  acthors,
  countryLanguage,
  voteInStars,
}) {
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  return (
    <div className="ms-modal" onClick={() => setSelectedSerie("")}>
      <div className="flex justify-self-center max-w-300 h-[95vh] px-5 overflow-auto">
        <div className="flex flex-col lg:flex-row gap-15 items-center">
          {selectedSerie.poster_path ? (
            <img
              className="h-120 mt-10"
              src={`https://image.tmdb.org/t/p/w342${selectedSerie.poster_path}`}
              alt={selectedSerie.name}
            />
          ) : (
            <div className="flex justify-center mt-30">
              <i className="fa-solid fa-image text-9xl text-red-950"></i>
            </div>
          )}
          <div key={selectedSerie.id} className="space-y-2">
            <h3 className="text-2xl">
              <strong>Titolo: </strong>
              <br />
              {selectedSerie.name}
            </h3>
            <h4 className="text-lg">
              <strong>Titolo originale: </strong>
              <br />
              {selectedSerie.original_name}
            </h4>
            <h4 className="flex items-center gap-2 text-lg">
              <strong>Lingua originale: </strong>
              {countryLanguage[selectedSerie.original_language] ? (
                <img
                  className="w-8"
                  src={
                    `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                      countryLanguage[selectedSerie.original_language]
                    }.svg` || "#"
                  }
                  alt={`Lingua originale: ${selectedSerie.original_language}`}
                />
              ) : (
                <p>🏴‍☠️</p>
              )}
            </h4>
            <h4>
              <strong className="text-lg">Media voto: </strong>
              {voteInStars(Math.ceil(selectedSerie.vote_average / 2))}
            </h4>
            {selectedSerie.overview && (
              <p className="h-30 mb-0 overflow-auto text-ellipsis">
                <strong className="text-lg">Trama: </strong>
                <br />
                {selectedSerie.overview}
              </p>
            )}
            {selectedSerie.genre_ids && (
              <h4 className="mt-2 flex gap-2 items-center">
                <strong className="text-lg">GENERI: </strong>
                {selectedSerie.genre_ids.map((genre) => (
                  <p key={genre}>{genres[genre]}</p>
                ))}
              </h4>
            )}
            {acthors && (
              <h3 className="text-lg font-bold mt-2">TOP 5 MEMBRI DEL CAST</h3>
            )}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center">
              {acthors.map((acthor) => {
                return (
                  <li
                    key={acthor.id}
                    className="flex flex-col items-center text-center"
                  >
                    <h4 className="text-sm">
                      Nome attore:
                      <br />
                      <strong>{acthor.name}</strong>
                    </h4>
                    <h4 className="text-sm">
                      Personaggio:
                      <br />
                      <strong>{acthor.character}</strong>
                    </h4>
                    {acthor.profile_path ? (
                      <img
                        className="w-16 mt-2"
                        src={`https://image.tmdb.org/t/p/w185${acthor.profile_path}`}
                        alt={acthor.name}
                      />
                    ) : (
                      <i className="fa-solid fa-user text-8xl mt-3 text-red-950"></i>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <i
          className="ms-esc fa-solid fa-xmark"
          onClick={() => setSelectedSerie("")}
        ></i>
      </div>
    </div>
  );
}
