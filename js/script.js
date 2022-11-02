import { displayMovies } from "./ui/displayMovies.js";
import { searchMovies } from "./ui/searchMovies.js";
import { displayHtml } from "./ui/displayHtml.js";
import { displayError } from "./ui/errorMessage.js";

const url = "http://www.omdbapi.com/?s=Christmas&type=movie&apikey=2370680c";

async function getMovies() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.Search;
    console.log(movies);

    displayMovies(movies);
    searchMovies(movies);
  } catch (error) {
    console.log(error);
    displayError("error", ".container");
  }
}

setTimeout(displayHtml, 3000);
getMovies();
