import { displayMovies } from "./functions/displayMovies.js";
import { searchMovies } from "./functions/searchMovies.js";
import { displayHtml } from "./functions/displayHtml.js";
import { displayError } from "./functions/errorMessage.js";

const url = "http://www.omdbapi.com/?s=Christmas&type=movie&apikey=2370680c";

async function getMovies() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.Search;

    displayMovies(movies);
    searchMovies(movies);
  } catch (error) {
    console.log(error);
    displayError("error", error, ".container");
  }
}

setTimeout(displayHtml, 3000);
getMovies();
