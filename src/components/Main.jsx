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
      <div className="container px-5">
        {movies.length ? (
          <h2 className="text-5xl text-center lg:text-start font-bold my-5">
            LISTA FILM
          </h2>
        ) : null}
        <MoviesList movies={movies} countryLanguage={countryLanguage} />
        {movies.length ? <hr className=" border border-red-800" /> : null}

        {series.length ? (
          <h2 className="text-5xl text-center lg:text-start font-bold my-5">
            LISTA SERIE TV
          </h2>
        ) : null}
        <SeriesList series={series} countryLanguage={countryLanguage} />
        {series.length ? <hr className=" border border-red-800 mb-10" /> : null}
      </div>
    </main>
  );
}
