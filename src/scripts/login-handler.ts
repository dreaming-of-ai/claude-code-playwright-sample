import { ACCESS_CODE, SESSION_KEY, SESSION_VALUE } from "./constants";

const form = document.getElementById("login-form") as HTMLFormElement;
const input = document.getElementById("access-code") as HTMLInputElement;
const error = document.getElementById("login-error") as HTMLParagraphElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const code = input.value.trim();

  if (code === ACCESS_CODE) {
    sessionStorage.setItem(SESSION_KEY, SESSION_VALUE);
    window.location.replace("/home");
  } else {
    error.textContent = "Invalid access code. Please try again.";
    error.classList.remove("hidden");
    input.value = "";
    input.focus();
  }
});
