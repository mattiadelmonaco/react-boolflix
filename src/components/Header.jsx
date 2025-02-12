import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src="/logo-boolflix.png" alt="Logo BoolFlix" />
          </a>
          <h1 className="text-5xl">Benvenuto su BoolFlix</h1>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
