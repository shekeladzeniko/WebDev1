let students = [
    {name1 : "nika", score : 80},
    {name1 : "luka", score : 55},
    {name1 : "ana", score : 92}
]

for(let i = 0; i < students.length; i++){
    if(students[i].score >= 60){
        console.log(students[i].name1 + " passed");
    } else {
        console.log(students[i].name1 + " failed");
    }
}