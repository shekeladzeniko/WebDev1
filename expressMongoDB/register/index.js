const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="confirmPassword"]');

const errorUsername = document.getElementById("error-username");
const errorPassword = document.getElementById("error-password");
const errorconfirmPassword = document.getElementById("error-confirm-password");


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value === "" || username.value == null) {
    setError(errorUsername, username, "username is required");
    return;
  }

  if (username.value === "username") {
    setError(errorUsername, username, "username can't be 'username'");
    return;
  }

  if (password.value === "" || password.value == null) {
    setError(errorPassword, password, "password is required");
    return;
  }

  if (password.value === "password") {
    setError(
      errorPassword,
      password,
      "password can't be 'password' it is easy for hackers!!!",
    );
    return;
  }

  if(confirmPassword.value !== password.value){
      setError(
            errorconfirmPassword,
            confirmPassword,
            "password doesn't match",
      );
      return;
  }

  registerUser();
});

function setError(errorMessage, inputField, message) {
  errorMessage.innerText = message;
  errorMessage.classList.add("message-error");
  input.classList.add("input-error");
}

async function registerUser(params) {
  try {
    const result = await fetch("http://localhost:3000/auth/register");

    const data = await result.json();
    console.log(data);
  } catch (err) {}
}