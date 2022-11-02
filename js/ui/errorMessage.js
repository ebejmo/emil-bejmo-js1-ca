export function displayError(messageType, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="${messageType}">"Hohoho, hold your raindeers. Looks like there has been a error."</div>`;
}
