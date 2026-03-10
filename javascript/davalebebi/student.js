function getsashualo(event) {
  event.preventDefault();

 const forelements = document.querySelector("form").elements;

      const name = forelements.name.value;
      const mathScore = forelements.math.value;
      const englishScore = forelements.english.value;

  const average = (mathScore + englishScore) / 2;
  
  document.getElementById("finalScore").innerHTML = "avarage score: " + average;

  if (name === "" || mathScore === "" || englishScore === "") {
    alert("pls fill in everything");
  }

}
