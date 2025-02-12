export default function SeriesList({ series, countryLanguage }) {
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
      {series.length ? <h2>Lista Serie TV</h2> : null}

      {series.map((serie) => {
        return (
          <li key={serie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
              alt=""
            />
            <h3>
              <strong>Titolo: </strong>
              {serie.name}
            </h3>
            <h4>
              <strong>Titolo originale: </strong>
              {serie.original_name}
            </h4>
            <h4>
              <strong>Lingua originale: </strong>
              {countryLanguage[serie.original_language] ? (
                <img
                  src={
                    `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                      countryLanguage[serie.original_language]
                    }.svg` || "#"
                  }
                  alt={`Lingua originale: ${serie.original_language}`}
                />
              ) : (
                <p>🏴‍☠️</p>
              )}
            </h4>
            <h4>
              <strong>Media voto: </strong>
              {voteInStars(Math.ceil(serie.vote_average / 2))}
            </h4>
          </li>
        );
      })}
    </ul>
  );
}
