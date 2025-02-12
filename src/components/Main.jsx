import { useSearchBarContext } from "../contexts/SearchBarContext";

const countryLanguage = {
  en: "GB",
  it: "IT",
  fr: "FR",
  de: "DE",
  es: "ES",
  ja: "JP",
  zh: "CN",
  ko: "KR",
};

export default function Main() {
  const { movies } = useSearchBarContext();

  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
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
    </main>
  );
}
