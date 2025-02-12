import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Header() {
  const [alert, setAlert] = useState({ message: "" });

  const showAlert = () => {
    setAlert({ message: "E' un tasto finto" });

    setTimeout(() => {
      setAlert({ message: "" });
    }, 3000);
  };

  const closeAlert = () => {
    setAlert({ message: "" });
  };

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
            <li className="hidden lg:block" onClick={showAlert}>
              <a href="#">Home</a>
            </li>
            <li className="hidden lg:block" onClick={showAlert}>
              <a href="#">Serie TV</a>
            </li>
            <li className="hidden lg:block" onClick={showAlert}>
              <a href="#">Film</a>
            </li>
            <li className="hidden lg:block" onClick={showAlert}>
              <a href="#">La mia lista</a>
            </li>
          </ul>

          <SearchBar />
        </div>
      </div>

      {/* ALERT */}

      {alert.message && (
        <div className="text-white min-w-70 p-3 shadow-2xl fixed bottom-15 right-15 rounded-lg bg-red-900">
          <div className="flex justify-between items-center">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>{alert.message}</p>
            <i
              className="fa-solid fa-xmark cursor-pointer px-2"
              onClick={closeAlert}
            ></i>
          </div>
        </div>
      )}
    </header>
  );
}
