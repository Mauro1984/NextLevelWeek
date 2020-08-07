//Procurar os botão
document
  .querySelector("#add-time")
  //Quando clicar no botão
  .addEventListener("click", cloneField);

// Execute uma ação
function cloneField() {
  //duplicar os campos
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);
  //pegar os campos
  const fields = newFieldContainer.querySelectorAll("input");
  fields.forEach(function (fields) {
    fields.value = "";
  });
  //colar na página, onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
