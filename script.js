const weightInput = document.querySelector("#input_weight");
const heightInput = document.querySelector("#input_height");

const sendButton = document.querySelector("#sendButton");

const spanElement = document.querySelector("#result");

function click(event) {
  event.preventDefault();
  const weight = weightInput.value;
  const height = heightInput.value;

  const result = weight / (height * height);

  spanElement.innerText = `Seu IMC eh: ${Number.parseFloat(result).toFixed(2)}`

  spanElement.classList.add("element")
}


sendButton.addEventListener("click", click);
