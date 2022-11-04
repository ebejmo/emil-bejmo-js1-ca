export function displayHtml() {
  const container = document.querySelector(".container");
  const loader = document.querySelector(".loader");

  loader.style.opacity = 0;
  loader.style.display = "none";

  container.style.display = "inline";
  container.style.opacity = 1;
}
