const contenedor = document.getElementById("productos-container");

productos.forEach(p => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" width="200">
    <div class="card-content">
      <h2 class="nombreproductocard">${p.nombre}</h2>
      <button class="btn btnDetalle" data-id="${p.id}">Detalle de producto</button>
      <p class="precio">${p.precio}</p>
    </div>
  `
    contenedor.appendChild(card)
})

// redirección al detalle
document.querySelectorAll(".btnDetalle").forEach(boton => {
    boton.addEventListener("click", function() {
        const id = this.getAttribute("data-id")
        window.location.href = `producto.html?id=${id}`
    })
})
