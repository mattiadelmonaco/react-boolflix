import { createContext, useContext, useState } from "react";

const SearchBarContext = createContext();

function SearchBarProvider({ children }) {
  const [movies, setMovies] = useState([]);

  return (
    <SearchBarContext.Provider value={{ movies, setMovies }}>
      {children}
    </SearchBarContext.Provider>
  );
}

function useSearchBarContext() {
  const context = useContext(SearchBarContext);
  return context;
}

export { SearchBarProvider, useSearchBarContext };
