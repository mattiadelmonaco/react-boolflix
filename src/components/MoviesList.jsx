export default function MoviesList({ movies, countryLanguage }) {
  return (
    <ul>
      <h2>Lista Film</h2>

      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h3>
              <strong>Titolo: </strong>
              {movie.title}
            </h3>
            <h4>
              <strong>Titolo originale: </strong>
              {movie.original_title}
            </h4>
            <h4>
              <strong>Lingua originale: </strong>
              <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                  countryLanguage[movie.original_language]
                }.svg`}
                alt={`Lingua originale: ${movie.original_language}`}
              />
            </h4>
            <h4>
              <strong>Media voto: </strong>
              {movie.vote_average}
            </h4>
          </li>
        );
      })}
    </ul>
  );
}
