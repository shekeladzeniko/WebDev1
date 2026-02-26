function execute() {
      const result = document.querySelector("p");

      const num1 = Number(document.querySelector("#num1").value);
      const num2 = Number(document.querySelector("#num2").value)

      result.innerHTML = num1 + num2;
}