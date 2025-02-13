import { useState } from "react";
import axios from "axios";

export default function GenresAccordion() {
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getGenres = () => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: "a2a818323e4aed568180bfa536321829",
        },
      })
      .then((res) => setGenres(res.data.genres));
  };

  const toggleAccordion = () => {
    if (isOpen) {
      setGenres([]);
    } else {
      getGenres();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden lg:block relative">
      <div
        className="ms-effect flex items-center gap-1 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3>Generi</h3>
        <button type="button" className="cursor-pointer">
          +
        </button>
      </div>
      <ul className="flex flex-col mt-5 z-30 absolute left-0 top-3 bg-black rounded-lg px-2">
        {genres.map((genre) => {
          return (
            <li
              key={genre.id}
              className="cursor-pointer my-1 border-b-2 border-red-950 ms-accordion"
              onClick={toggleAccordion}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
