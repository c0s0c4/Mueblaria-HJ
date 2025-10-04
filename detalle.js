function mostrarDetallesProducto(producto) {
  if (!producto) {
    console.error("Producto no encontrado.");
    return;
  }

  // Nombre, precio, descripción e imagen
  document.getElementById("producto-nombre").textContent = producto.nombre;
  document.getElementById("producto-precio").textContent = producto.precio;
  document.getElementById("producto-descripcion").textContent = producto.descripcion;
  document.getElementById("imagen-producto").src = producto.imagen || "";

  // Seleccionamos la tabla y la vaciamos
  const tabla = document.getElementById("tabla-caracteristicas");
  tabla.innerHTML = "";

  const labels = {
    medidas: "Medidas",
    materiales: "Materiales",
    acabado: "Acabado",
    peso: "Peso",
    capacidad: "Capacidad",
    tapizado: "Tapizado",
    confort: "Confort",
    modulares: "Modulares",
    cargaMaxima: "Carga Máxima",
    rotacion: "Rotación",
    garantia: "Garantía",
    almacenamiento: "Almacenamiento",
    caracteristicas: "Características",
    relleno: "Relleno",
    sostenibilidad: "Sostenibilidad",
    colchon: "Colchón",
    extension: "Extensión",
    cables: "Cables",
    apilables: "Apilables",
    regulacion: "Regulación",
    certificacion: "Certificación",
    incluye: "Incluye"
  };

// Si tiene características agrupadas
const data = producto.caracteristicas ? producto.caracteristicas : producto;

// Recorremos las claves
for (let key in data) {
  if (labels[key] && data[key]) {
    let fila = `
      <tr>
        <th>${labels[key]}</th>
        <td>${data[key]}</td>
      </tr>
    `;
    tabla.innerHTML += fila;
  }
}


const params = new URLSearchParams(window.location.search);
const productoID = params.get("id");


if (productoID && productos[productoID]) {
  mostrarDetallesProducto(productos[productoID]);
} else {
  console.error("ID inválido o producto no encontrado");
}
