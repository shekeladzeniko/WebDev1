function getsashualo(event) {
  event.preventDefault();

 const formlements = document.querySelector("form").elements;

      const name = formlements.name.value;
      const mathScore = formlements.math.value;
      const englishScore = formlements.english.value;

  const average = (mathScore + englishScore) / 2;
  
  document.getElementById("finalScore").innerHTML = "avarage score: " + average;

  if (name === "" || mathScore === "" || englishScore === "") {
    alert("pls fill in everything");
  }

}
