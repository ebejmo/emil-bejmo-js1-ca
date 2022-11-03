import { displayHtml } from "./ui/displayHtml.js";
import { displayError } from "./ui/errorMessage.js";
import { createMovie } from "./ui/movie.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://www.omdbapi.com/?i=" + id + "&plot=full&apikey=2370680c";

async function getMovie() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);
    createMovie(details);
  } catch (error) {
    console.log(error);
    displayError("error", error, ".container");
  }
}

setTimeout(displayHtml, 3000);
getMovie();
