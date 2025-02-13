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
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 my-10 pb-10 justify-items-center">
      {series.map((serie) => {
        return (
          <li
            key={serie.id}
            className="ms-card border border-red-800 w-65 relative top-0 left-0 shadow-red-900 shadow-lg"
          >
            <img
              className="w-65 h-98"
              src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
              alt=""
            />
            <div className="ms-description h-full w-64.5 text-sm p-4 space-y-1.5 absolute top-0 left-0 bg-black">
              <h3>
                <strong>Titolo: </strong>
                <br />
                {serie.name}
              </h3>
              <h4>
                <strong>Titolo originale: </strong>
                <br />
                {serie.original_name}
              </h4>
              <h4 className="flex gap-2">
                <strong>Lingua originale: </strong>
                {countryLanguage[serie.original_language] ? (
                  <img
                    className="w-6"
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
              {serie.overview && (
                <p className="h-45 overflow-auto text-ellipsis">
                  <strong>Trama: </strong>
                  <br />
                  {serie.overview}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
