export default function MovieModal({
  selectedMovie,
  setSelectedMovie,
  acthors,
  countryLanguage,
  voteInStars,
}) {
  return (
    <div className="ms-modal" onClick={() => setSelectedMovie("")}>
      <div className="flex items-center justify-self-center w-300 h-full">
        <div className="flex gap-15 items-center">
          {selectedMovie.poster_path ? (
            <img
              className="h-120"
              src={`https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
          ) : (
            <div className="flex justify-center mt-30">
              <i className="fa-solid fa-image text-9xl text-red-950"></i>
            </div>
          )}
          <div key={selectedMovie.id} className="space-y-3">
            <h3 className="text-2xl">
              <strong>Titolo: </strong>
              <br />
              {selectedMovie.title}
            </h3>
            <h4 className="text-lg">
              <strong>Titolo originale: </strong>
              <br />
              {selectedMovie.original_title}
            </h4>
            <h4 className="flex items-center gap-2 text-lg">
              <strong>Lingua originale: </strong>
              {countryLanguage[selectedMovie.original_language] ? (
                <img
                  className="w-8"
                  src={
                    `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                      countryLanguage[selectedMovie.original_language]
                    }.svg` || "#"
                  }
                  alt={`Lingua originale: ${selectedMovie.original_language}`}
                />
              ) : (
                <p>🏴‍☠️</p>
              )}
            </h4>
            <h4>
              <strong className="text-lg">Media voto: </strong>
              {voteInStars(Math.ceil(selectedMovie.vote_average / 2))}
            </h4>
            {selectedMovie.overview && (
              <p className="h-30 mb-0 overflow-auto text-ellipsis">
                <strong className="text-lg">Trama: </strong>
                <br />
                {selectedMovie.overview}
              </p>
            )}
            {acthors && (
              <h3 className="text-lg font-bold mt-4">TOP 5 MEMBRI DEL CAST</h3>
            )}
            <ul className="flex gap-10 justify-center">
              {acthors.map((acthor) => {
                return (
                  <li
                    key={acthor.id}
                    className="flex flex-col items-center text-center"
                  >
                    <h4>
                      Nome attore:
                      <br />
                      <strong>{acthor.name}</strong>
                    </h4>
                    <h4>
                      Personaggio:
                      <br />
                      <strong>{acthor.character}</strong>
                    </h4>
                    {acthor.profile_path ? (
                      <img
                        className="w-20"
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
          onClick={() => setSelectedMovie("")}
        ></i>
      </div>
    </div>
  );
}
