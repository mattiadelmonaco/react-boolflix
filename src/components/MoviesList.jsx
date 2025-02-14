import { useState } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";
import { useGenresFilterContext } from "../contexts/GenresFilterContext";

export default function MoviesList({ movies, countryLanguage }) {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [acthors, setActhors] = useState([]);
  const { genresFilter } = useGenresFilterContext();

  const getActhors = (acthorId) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${acthorId}/credits`, {
        params: {
          api_key: "a2a818323e4aed568180bfa536321829",
        },
      })
      .then((res) => setActhors(res.data.cast.slice(0, 5)));
  };

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

  const filteredMovie = movies.filter((movie) => {
    if (genresFilter.length === 0) {
      return true;
    }
    console.log(movie.genre_ids, genresFilter, movie.title);
    for (let i = 0; i < movie.genre_ids.length; i++) {
      let genre = movie.genre_ids[i];
      if (genresFilter.includes(genre)) {
        return true;
      }
    }
    return false;
  });

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 my-10 pb-10 justify-items-center">
      {filteredMovie.map((movie) => {
        return (
          <li
            key={movie.id}
            className="ms-card border border-red-800 w-65 relative top-0 left-0 shadow-red-900 shadow-lg"
            onClick={() => [setSelectedMovie(movie), getActhors(movie.id)]}
          >
            {movie.poster_path ? (
              <img
                className="w-65 h-98"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt=""
              />
            ) : (
              <div className="flex justify-center mt-30">
                <i className="fa-solid fa-image text-9xl text-red-950"></i>
              </div>
            )}
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
        <MovieModal
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          acthors={acthors}
          countryLanguage={countryLanguage}
          voteInStars={voteInStars}
        />
      )}
    </ul>
  );
}
