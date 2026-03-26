const numbers= [1,2,3,4];

for(let i = 0; i < numbers.length; i++)
{
    if(i % 2 === 0){
        const box = document.createElement("div")
        box.style.background = "blue"
        box.style.width = "400px"
        box.style.height = "400px"
        box.textContent = i;
        document.body.appendChild(box)
    } else {
        const box2 = document.createElement("div")
        box2.style.background = "red"
        box2.style.width = "400px"
        box2.style.height = "400px"
        box2.textContent = i;
        document.body.appendChild(box2)
    }
}


