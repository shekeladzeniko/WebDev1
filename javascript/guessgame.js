let userinput = Number(prompt("Enter the number:"));

while(userinput != 30){
      if(userinput > 30){
            alert("lower!")
      } else if(userinput < 30){
            alert("higher!")
      }
      userinput = Number(prompt("Enter the number:"));
}
alert("you guessed right!")