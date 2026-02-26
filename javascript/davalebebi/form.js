document.querySelector("form").addEventListener("submit", function(e){
     const form = document.querySelector("form").elements;

    fetch(form.username.value, form.password.value, form.age.value, form.ismale.value, form.mail.value);

    e.preventDefault();

});

function fetch(username, password, age, ismale, email){
    console.log(username + " " + password + " " + age + " " + ismale + " " + email)
} 