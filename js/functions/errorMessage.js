export function displayError(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="${messageType}">${message}</div>`;
}
