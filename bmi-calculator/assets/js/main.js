const heightInput = document.getElementById("height");
const form = document.getElementById("bmi-form");

heightInput.addEventListener("input", () => {
  let n = heightInput.value.replace(/\D/g, "");

  if (n.length >= 3) {
    const parteInteira = n.slice(0, n.length - 2);
    const parteDecimal = n.slice(-2);
    heightInput.value = `${parteInteira}.${parteDecimal}`;
  } else {
    heightInput.value = n;
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = document.getElementById("button");
  const weight = document.getElementById("weight").value;
  const height = parseFloat(heightInput.value);

  if (!weight || !height || height <= 0 || weight <= 0) {
    return;
  }

  const imc = (weight / (height * height)).toFixed(2);
  const resultContainer = document.getElementById("result-container");
  const result = document.getElementById("result");
  const groupTitle = document.getElementById("groupTitle");
  const groupDesc = document.getElementById("groupDesc");

  result.textContent = `Seu IMC é: ${imc}`;

  if (imc < 18.5) {
    resultContainer.style.borderLeft = "4px solid cyan";
    groupTitle.innerHTML =
      'Seu grupo é <span id="abaixo-span">Abaixo do peso</span>';
    groupDesc.textContent =
      "Descrição para abaixo do peso. Digitando coisas aleatórias para ver se vai quebrar a linha ou não, muita coisas que deveríam ser discutidas ou ao menos ditas não são faladas pela maioria das pessoas e isso pode ser a razão de diversos";

    var span = groupTitle.querySelector("#abaixo-span");
    span.classList.add("abaixo-span");
  } else if (imc >= 18.5 && imc < 25) {
    resultContainer.style.borderLeft = "4px solid green";
    groupTitle.innerHTML = 'Seu grupo é <span id="normal-span">Normal</span>';
    groupDesc.textContent =
      "Descrição para normal. Digitando coisas aleatórias para ver se vai quebrar a linha ou não, muita coisas que deveríam ser discutidas ou ao menos ditas não são faladas pela maioria das pessoas e isso pode ser a razão de diversos";

    var span = groupTitle.querySelector("#normal-span");
    span.classList.add("normal-span");
  } else if (imc >= 25 && imc < 30) {
    resultContainer.style.borderLeft = "4px solid yellow";
    groupTitle.innerHTML = 'Seu grupo é <span id="sobre-span">Sobrepeso</span>';
    groupDesc.textContent =
      "Descrição para sobrepeso. Digitando coisas aleatórias para ver se vai quebrar a linha ou não, muita coisas que deveríam ser discutidas ou ao menos ditas não são faladas pela maioria das pessoas e isso pode ser a razão de diversos";

    var span = groupTitle.querySelector("#sobre-span");
    span.classList.add("sobre-span");
  } else if (imc >= 30 && imc < 35) {
    resultContainer.style.borderLeft = "4px solid orange";
    groupTitle.innerHTML =
      'Seu grupo é <span id="ob1-span">Obesidade grau I</span>';
    groupDesc.textContent =
      "Descrição para obesidade. Digitando coisas aleatórias para ver se vai quebrar a linha ou não, muita coisas que deveríam ser discutidas ou ao menos ditas não são faladas pela maioria das pessoas e isso pode ser a razão de diversos";

    var span = groupTitle.querySelector("#ob1-span");
    span.classList.add("ob1-span");
  } else {
    resultContainer.style.borderLeft = "4px solid red";
    groupTitle.innerHTML =
      'Seu grupo é <span id="ob2-span">Obesidade grau II</span>';
    groupDesc.textContent =
      "Descrição para obesidade. Digitando coisas aleatórias para ver se vai quebrar a linha ou não, muita coisas que deveríam ser discutidas ou ao menos ditas não são faladas pela maioria das pessoas e isso pode ser a razão de diversos";

    var span = groupTitle.querySelector("#ob2-span");
    span.classList.add("ob2-span");
  }

  button.classList.add("submitted");
  setTimeout(() => {
    button.classList.remove("submitted");
  }, 3000);
});
