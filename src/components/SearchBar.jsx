import { useState } from "react";
import { useSearchBarContext } from "../contexts/SearchBarContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const [{ setMovies }, { setSeries }] = useSearchBarContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "a2a818323e4aed568180bfa536321829",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "a2a818323e4aed568180bfa536321829",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca titolo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-neutral-400 px-2 py-1 mr-2 rounded-md"
      />
      <button
        type="submit"
        className="border border-neutral-400 px-2 py-1 mr-2 rounded-md cursor-pointer"
      >
        Cerca
      </button>
    </form>
  );
}
