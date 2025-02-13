import { useState } from "react";

export default function MoviesList({ movies, countryLanguage }) {
  const [selectedMovie, setSelectedMovie] = useState("");

  const voteInStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i key={i} className="fa-solid fa-star text-amber-400"></i>);
    }
    for (let i = num; i < 5; i++) {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 my-10 pb-10 justify-items-center">
      {movies.map((movie) => {
        return (
          <li
            key={movie.id}
            className="ms-card border border-red-800 w-65 relative top-0 left-0 shadow-red-900 shadow-lg"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              className="w-65 h-98"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt=""
            />
            <div className="ms-description h-full w-64.5 text-sm p-4 space-y-1.5 absolute top-0 left-0 bg-black">
              <h3>
                <strong>Titolo: </strong>
                <br />
                {movie.title}
              </h3>
              <h4>
                <strong>Titolo originale: </strong>
                <br />
                {movie.original_title}
              </h4>
              <h4 className="flex gap-2">
                <strong>Lingua originale: </strong>
                {countryLanguage[movie.original_language] ? (
                  <img
                    className="w-6"
                    src={
                      `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                        countryLanguage[movie.original_language]
                      }.svg` || "#"
                    }
                    alt={`Lingua originale: ${movie.original_language}`}
                  />
                ) : (
                  <p>🏴‍☠️</p>
                )}
              </h4>
              <h4>
                <strong>Media voto: </strong>
                {voteInStars(Math.ceil(movie.vote_average / 2))}
              </h4>
              {movie.overview && (
                <p className="h-45 overflow-auto text-ellipsis">
                  <strong>Trama: </strong>
                  <br />
                  {movie.overview}
                </p>
              )}
            </div>
          </li>
        );
      })}
      {selectedMovie && (
        <div className="ms-modal" onClick={() => setSelectedMovie("")}>
          <div className="flex items-center justify-self-center w-300 h-full">
            <div className="flex gap-15">
              <img
                src={`https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
              />
              <div className="space-y-3">
                <h3 className="text-3xl">
                  <strong>Titolo: </strong>
                  <br />
                  {selectedMovie.title}
                </h3>
                <h4 className="text-xl">
                  <strong>Titolo originale: </strong>
                  <br />
                  {selectedMovie.original_title}
                </h4>
                <h4 className="flex items-center gap-2 text-xl">
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
                  <strong className="text-xl">Media voto: </strong>
                  {voteInStars(Math.ceil(selectedMovie.vote_average / 2))}
                </h4>
                {selectedMovie.overview && (
                  <p className="h-45 overflow-auto text-ellipsis">
                    <strong className="text-xl">Trama: </strong>
                    <br />
                    {selectedMovie.overview}
                  </p>
                )}
              </div>
            </div>
            <i
              className="ms-esc fa-solid fa-xmark"
              onClick={() => setSelectedMovie("")}
            ></i>
          </div>
        </div>
      )}
    </ul>
  );
}
