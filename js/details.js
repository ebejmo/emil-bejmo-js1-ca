import { displayHtml } from "./functions/displayHtml.js";
import { displayError } from "./functions/errorMessage.js";
import { createMovie } from "./functions/movie.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://www.omdbapi.com/?i=" + id + "&plot=full&apikey=2370680c";

async function getMovie() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createMovie(details);
  } catch (error) {
    console.log(error);
    displayError("error", error, ".container");
  }
}

setTimeout(displayHtml, 3000);
getMovie();
