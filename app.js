
const contenedor = document.getElementById("productos-container");

productos.forEach(p => {
  const card = document.createElement("div")
  card.classList.add("card")

  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" width="200">
    <div class="card-content">
      <h2 class="nombreproductocard">${p.nombre}</h2>
      <p class="precio">${p.precio}</p>
      <button id="Detalle del producto" class="btn">Detalle del producto</button>
    </div>
  `
  contenedor.appendChild(card)
})

document.getElementById("Detalle del producto").addEventListener("click", function() {
    window.location.href = "producto.html";
});



  let contador = 0;

  const botones = document.querySelectorAll('.btnAgregarCarrito');
        const contadorCarrito = document.getElementById('contadorCarrito');


        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                contador++; // Incrementa contador
                contadorCarrito.textContent = contador  
                alert("Producto agregado al carrito")
            })
        })

