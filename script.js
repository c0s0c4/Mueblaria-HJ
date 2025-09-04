<script>
  const input = document.getElementById("input");
  const lista = document.getElementById("listadeproductos");
  const items = lista.getElementsByTagName("li");

  input.addEventListener("input", function() {
    const filtro = input.value.toLowerCase();
    let tieneCoincidencias = false;

    for (let i = 0; i < items.length; i++) {
      const texto = items[i].textContent.toLowerCase();
      if (texto.includes(filtro) && filtro !== "") {
        items[i].style.display = ""; // mostrar
        tieneCoincidencias = true;
      } else {
        items[i].style.display = "none"; // ocultar
      }
    }

    // Solo mostrar la lista si hay coincidencias y el input no está vacío
    lista.style.display = tieneCoincidencias ? "block" : "none";
  });
</script>
