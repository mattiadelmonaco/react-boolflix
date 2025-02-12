import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex justify-center gap-5 md:gap-10 xl:justify-between items-center py-3">
          <a href="#">
            <img
              className="md:hidden"
              src="/logo-boolflix.png"
              alt="Logo BoolFlix"
            />
          </a>
          <a href="#">
            <img
              className="hidden md:block"
              src="/logo-grande-boolflix.png"
              alt="Logo BoolFlix"
            />
          </a>
          <ul className="flex gap-8">
            <li className="hidden lg:block">
              <a href="#">Home</a>
            </li>
            <li className="hidden lg:block">
              <a href="#">Serie TV</a>
            </li>
            <li className="hidden lg:block">
              <a href="#">Film</a>
            </li>
            <li className="hidden lg:block">
              <a href="#">La mia lista</a>
            </li>
          </ul>

          <SearchBar />
        </div>
      </div>
    </header>
  );
}
