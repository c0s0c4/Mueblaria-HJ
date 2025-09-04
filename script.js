
  const input = document.getElementById("input");
const lista = document.getElementById("listadeproductos");
const items = lista.getElementsByTagName("li");

input.addEventListener("input", function() {
  const filtro = input.value.toLowerCase();
  let tieneCoincidencias = false;

  for (let i = 0; i < items.length; i++) {
    const texto = items[i].textContent.toLowerCase();
    if (texto.includes(filtro) && filtro !== "") {
      items[i].style.display = "block";
      tieneCoincidencias = true;
    } else {
      items[i].style.display = "none";
    }
  }

  lista.style.display = tieneCoincidencias ? "block" : "none";
});
