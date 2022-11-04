import { displayMovies } from "./displayMovies.js";

export function searchMovies(movies) {
  const searchBar = document.querySelector(".search-bar");
  searchBar.onkeyup = function () {
    const value = event.target.value.trim().toLowerCase();

    const filteredMovies = movies.filter((movie) => {
      if (movie.Title.toLowerCase().startsWith(value)) {
        return true;
      }
    });

    displayMovies(filteredMovies);
  };
}
