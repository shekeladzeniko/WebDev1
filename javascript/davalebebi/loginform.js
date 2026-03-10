function exc(event) {
      event.preventDefault();

      const formelements = document.querySelector("form").elements;

      const username = formelements.username.value;
      const password = formelements.password.value;

      if(username.length < 4) {
        usererror.innerHTML = "username must be at least 4 characters";
        usererror.style.color = "red";
      } else if(password.length < 6) {
        passerror.innerHTML = "password must be at least 6 characters";
        passerror.style.color = "red";
      } else {
            error.innerHTML = "successfully logged in";
            error.style.color = "green";

      }
}