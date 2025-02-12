import { createContext, useContext, useState } from "react";

const SearchBarContext = createContext();

function SearchBarProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    <SearchBarContext.Provider
      value={[
        { movies, setMovies },
        { series, setSeries },
      ]}
    >
      {children}
    </SearchBarContext.Provider>
  );
}

function useSearchBarContext() {
  const context = useContext(SearchBarContext);
  return context;
}

export { SearchBarProvider, useSearchBarContext };
