const users = ["ilo", "saba", "daviti"];
const password = ["ilo1", "saba2", "daviti3"];

let user = prompt("enter username")
let pass = prompt("enter password")

for(let i = 0; i < users.length; i++){
    if(user !== users[i]){
        alert("username doesn't exist");
    }
}

for(let j = 0; j < password.length; j++){
    if(pass !== password[j]){
        alert("password doesn't exist")
    }
}

if(user === users[0] || user === users[1] || user === users[2] && pass === password[0] || pass === password[1] || pass === password[2]){
    console.log("sucessful login")

} else {
    console.log("unsucessful login")
}