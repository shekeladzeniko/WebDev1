
function makebed(callback){
setTimeout(() => {
    makebed();
}, 1000);
callback();
}


function cleandesk(callback){
setTimeout(() => {
    cleandesk();
}, 4000);
}


function playgames(callback){
setTimeout(() => {
    playgames();
}, 2000);
}


function sleep(callback){
setTimeout(() => {
    sleep();
}, 3000);
}

makebed(() => {
    cleandesk(() => {
        playgames(() => {
            sleep();
        });
    });
});
