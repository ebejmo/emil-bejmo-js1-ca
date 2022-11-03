import { displayHtml } from "./ui/displayHtml.js";

const form = document.querySelector("#contactForm");

const fullName = document.querySelector(".fullName");
const nameError = document.querySelector("#fullNameError");
const address = document.querySelector(".address");
const addressError = document.querySelector("#addressError");
const subject = document.querySelector(".subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector(".email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector(".form-success");

function formValidation(event) {
  event.preventDefault();

  if (minLength(fullName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (minLength(address.value, 24)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (minLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (emailValidation(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  function submitForm() {
    if (
      minLength(fullName.value, 0) &&
      minLength(address.value, 24) &&
      minLength(subject.value, 9) &&
      emailValidation(email.value)
    ) {
      successMessage.innerHTML = `<div class="success">Your message was submitted!</div>`;
      successMessage.style.display = "block";
      form.reset();
    } else {
      successMessage.innerHTML = "";
    }
  }
  submitForm();
}

form.addEventListener("submit", formValidation);

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}

setTimeout(displayHtml, 3000);
