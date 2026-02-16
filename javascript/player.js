let game = {
    teamA: 0,
    teamB: 0
}

function addgoal(teamname){
    if(teamname === "A"){
        game.teamA++;
    } else {
        game.teamB++;
    }
}

addgoal("A");

console.log(game);