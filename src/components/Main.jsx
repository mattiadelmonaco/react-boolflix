import { useSearchBarContext } from "../contexts/SearchBarContext";

export default function Main() {
  const { movies } = useSearchBarContext();

  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>
                <strong>Titolo: </strong>
                {movie.title}
              </h3>
              <h4>
                <strong>Titolo originale: </strong>
                {movie.original_title}
              </h4>
              <h4>
                <strong>Lingua originale: </strong>
                {movie.original_language}
              </h4>
              <h4>
                <strong>Media voto: </strong>
                {movie.vote_average}
              </h4>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
