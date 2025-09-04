// Lista de productos en el buscador
<script>
  const input = document.getElementById("input")
  const lista = document.getElementById("listadeproductos")
  const items = lista.getElementsByTagName("li")

  input.addEventListener("input", function() {
    const filtro = input.value.toLowerCase()

    for (let i = 0; i < items.length; i++) {
      const texto = items[i].textContent.toLowerCase()
      if (texto.includes(filtro)) {
        items[i].style.display = "" // mostrar
      } else {
        items[i].style.display = "none"// ocultar
      }
    }
  })
</script>
