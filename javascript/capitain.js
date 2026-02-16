const name1 = prompt("enter your name")
const age = prompt("enter your age")
const iscaptain = prompt("are you captain?")

const player = {
    name1,
    age,
    iscaptain
}

if(iscaptain === "yes"){
    console.log("this player is captain " + player)
} else {
    console.log("this player is member " + player)
}

console.log(player)