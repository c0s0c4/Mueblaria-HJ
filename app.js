// app.js (donde generas las tarjetas)
const contenedor = document.getElementById("productos-container");

// Itera sobre las CLAVES del objeto 'productos' para obtener el ID
Object.keys(productos).forEach(id => {
    const p = productos[id]; // Obtiene los datos del producto

    const card = document.createElement("div");
    card.classList.add("card");

    // Usa el ID como data-id
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" width="200">
      <div class="card-content">
        <h2>${p.nombre}</h2>
        <p class="precio">${p.precio}</p>
        <button class="btn btnDetalle" data-id="${id}">Detalle de producto</button>
      </div>
    `;
    contenedor.appendChild(card);
});

// 🚀 Conectar el botón al detalle con ID en la URL
document.querySelectorAll(".btnDetalle").forEach(boton => {
    boton.addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        window.location.href = `producto.html?id=${id}`;
    });
});

// -----------------------------
// CONTACTO (esto no lo toco)
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
