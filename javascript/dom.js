const paragraphs = document.querySelectorAll("p")
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].innerHTML = "hello world"
    paragraphs[i].style.backgroundColor = "lightblue"
    paragraphs[i].style.color = "purple"
    paragraphs[i].style.margin = "40px"
    paragraphs[i].style.border = "black solid 2px"
}