import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <form>
      <input
        name="search"
        type="search"
        placeholder="Cerca titolo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
