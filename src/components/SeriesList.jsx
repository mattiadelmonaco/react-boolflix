export default function SeriesList({ series, countryLanguage }) {
  return (
    <ul>
      <h2>Lista Serie TV</h2>

      {series.map((series) => {
        return (
          <li key={series.id}>
            <h3>
              <strong>Titolo: </strong>
              {series.name}
            </h3>
            <h4>
              <strong>Titolo originale: </strong>
              {series.original_name}
            </h4>
            <h4>
              <strong>Lingua originale: </strong>
              <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                  countryLanguage[series.original_language]
                }.svg`}
                alt={`Lingua originale: ${series.original_language}`}
              />
            </h4>
            <h4>
              <strong>Media voto: </strong>
              {series.vote_average}
            </h4>
          </li>
        );
      })}
    </ul>
  );
}
