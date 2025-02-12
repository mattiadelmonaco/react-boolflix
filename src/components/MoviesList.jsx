export default function MoviesList({ movies, countryLanguage }) {
  const voteInStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    for (let i = num; i < 5; i++) {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  return (
    <ul>
      {movies.length ? <h2>Lista Film</h2> : null}

      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt=""
            />
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
              {countryLanguage[movie.original_language] ? (
                <img
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
          </li>
        );
      })}
    </ul>
  );
}
