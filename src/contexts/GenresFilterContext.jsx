import { createContext, useContext, useState } from "react";

const GenresFilterContext = createContext();

function GenresFilterProvider({ children }) {
  const [genresFilter, setGenresFilter] = useState([]);

  return (
    <GenresFilterContext.Provider value={{ genresFilter, setGenresFilter }}>
      {children}
    </GenresFilterContext.Provider>
  );
}

function useGenresFilterContext() {
  const context = useContext(GenresFilterContext);
  return context;
}

export { GenresFilterProvider, useGenresFilterContext };
