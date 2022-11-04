export function displayMovies(moviesToDisplay) {
  const movieContainer = document.querySelector(".movies");
  movieContainer.innerHTML = "";

  moviesToDisplay.forEach((movie) => {
    movieContainer.innerHTML += `<a href="details.html?id=${movie.imdbID}" class="movie">
                <div class="image" style="background-image: url(${movie.Poster})"></div>
                 <div class="details">
                    <p class="title">${movie.Title}</p>
                    <p class="year">${movie.Year}</p>
                </div>
             </a>`;
  });
}
