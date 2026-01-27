let age = prompt("sheiyvanet tqveni asaki")
let hastkt = prompt("gaqvt bileti?")
let isLate = prompt("daagvianet?")
let moreThan13 = prompt("xart 13 welze metis")
let WithParent = prompt("gaxlavt mshobeli?")

if (age >= 18 && hastkt === "yes" && isLate === "no") {
      alert("shegidzliat uyurot films")
} else if(moreThan13 === "yes" && WithParent === "yes" && hastkt === "yes") {
      alert("shegidzliat uyurot films")
} else if (isLate === "yes" || hastkt === "no") {
      
} else {
      alert("mimartet tanamshromels")
}
