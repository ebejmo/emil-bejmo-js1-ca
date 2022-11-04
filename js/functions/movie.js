export function createMovie(details) {
  const detailsContainer = document.querySelector(".details-container");

  document.title = details.Title + " | Jingle Bell Movies";
  detailsContainer.innerHTML = `<h1>${details.Title}</h1>
      <div class="details-image" style="background-image: url('${details.Poster}')"></div>
       <div class="details-movie">
          <p>${details.Plot}</p>
          <div class="details-info">
            <h2>Genre</h2><p>${details.Genre}</p>
            <h2>Actors</h2><p>${details.Actors}</p>
            <h2>IMDB Rating</h2><p>${details.Ratings[0].Value}</p>
            <h2>Release date</h2><p>${details.Released}</p>
          </div>
      </div>`;
}
