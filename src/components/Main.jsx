import { useSearchBarContext } from "../contexts/SearchBarContext";

import MoviesList from "./MoviesList";
import SeriesList from "./SeriesList";

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
  const [{ movies }, { series }] = useSearchBarContext();

  return (
    <main>
      <MoviesList movies={movies} countryLanguage={countryLanguage} />
      <SeriesList series={series} countryLanguage={countryLanguage} />
    </main>
  );
}
