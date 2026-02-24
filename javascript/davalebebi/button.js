function execute() {
      const input = document.querySelector("input");

      if(isNaN(input.value)){
            document.querySelector("p").innerHTML = "not a number"
      } else if(input.value >= 1 && input.value <= 10) {
            document.querySelector("p").innerHTML = "you got it"
      } else {
            document.querySelector("p").innerHTML = "not in range"
      }
}