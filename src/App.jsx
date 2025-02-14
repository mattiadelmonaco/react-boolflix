import Header from "./components/Header";
import Main from "./components/Main";
// contexts
import { SearchBarProvider } from "./contexts/SearchBarContext";
import { GenresFilterProvider } from "./contexts/GenresFilterContext";

export default function App() {
  return (
    <SearchBarProvider>
      <GenresFilterProvider>
        <Header />
        <Main />
      </GenresFilterProvider>
    </SearchBarProvider>
  );
}
