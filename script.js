const h1 = document.querySelector("h1"); // creamos las variables que representaran los selectores
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
// vamos a escucahr los eventos de lo que ocurre en los botones
btn.addEventListener("click", btnOnClick);

function btnOnClick() {
  const sumaInputs = +input1.value + +input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
