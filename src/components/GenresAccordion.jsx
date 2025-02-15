import { useState } from "react";
import axios from "axios";
import { useGenresFilterContext } from "../contexts/GenresFilterContext";

export default function GenresAccordion() {
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { genresFilter, setGenresFilter } = useGenresFilterContext();

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
    <div className=" relative">
      <div className="flex justify-center" onClick={toggleAccordion}>
        <h3 className="cursor-pointer pr-1 text-xs ms-text-sm">
          Filtra risultati per genere
        </h3>
        <button type="button" className="cursor-pointer text-xs ms-text-sm">
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col mt-5 z-30 absolute ms-position bg-black rounded-lg px-2 h-90 w-40 overflow-auto">
          {genres.map((genre) => {
            return (
              <li
                key={genre.id}
                className="flex gap-2 cursor-pointer my-1 border-b-2 border-red-950 text-lg"
              >
                <h3 className="mb-0.5">{genre.name}</h3>
                <input
                  type="checkbox"
                  name="select"
                  checked={genresFilter.includes(genre.id)}
                  onChange={(event) => {
                    setGenresFilter((currentValue) =>
                      event.target.checked
                        ? [...currentValue, genre.id]
                        : currentValue.filter((id) => id !== genre.id)
                    );
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
