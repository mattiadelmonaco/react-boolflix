import Header from "./components/Header";
import Main from "./components/Main";
// contexts
import { SearchBarProvider } from "./contexts/SearchBarContext";

export default function App() {
  return (
    <SearchBarProvider>
      <Header />
      <Main />
    </SearchBarProvider>
  );
}
