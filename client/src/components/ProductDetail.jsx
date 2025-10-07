import React, { useState, useEffect } from "react";
import { productos } from "../src/productosDetalle.js"; // importar productos
import "../CSS/Detalle.css";
import "../CSS/Menu.css";

function DetalleProducto() {
  const { productoKey } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (productoKey && productos[productoKey]) {
      setProducto(productos[productoKey]);
    } else {
      setProducto(null);
    }
  }, [productoKey]);

  const keysOrden = [
    "medidas", "materiales", "acabado", "peso", "capacidad", "tapizado",
    "confort", "rotacion", "garantia", "almacenamiento", "caracteristicas",
    "modulares", "cargaMaxima", "extension", "colchon", "relleno",
    "sostenibilidad", "incluye", "apilables", "regulacion", "cables"
  ];

  return (
    <div className="detalleproducto-container">
      {/* Header */}
     <header className="menu-header">
  <div className="menu-containerm">
    <div className="menu-btn-menu">
      <label htmlFor="menu-btn-menu" className="menu-icon-menu">☰</label>
    </div>
    <div className="menu-logo">
      <img src="KitDeImágenes/logo.svg" alt="logo" />
    </div>
    <nav className="menu-menu">
      <a className="a" href="/">INICIO</a>
      <a className="a" href="/nosotros">NOSOTROS</a>
      <a className="a" href="/productos">PRODUCTOS</a>
      <a className="a" href="/contacto">CONTACTO</a>
    </nav>
  </div>
</header>

<input type="checkbox" id="menu-btn-menu" />
<div className="menu-container-menu">
  <div className="menu-cont-menu">
    <nav className="menu-menu">
      <a className="a" href="/">INICIO</a>
      <a className="a" href="/nosotros">NOSOTROS</a>
      <a className="a" href="/productos">PRODUCTOS</a>
      <a className="a" href="/contacto">CONTACTO</a>
    </nav>
        </div>
      </div>

      {/* Contenedor de detalle */}
      <section className="detalleproducto-producto-details">
        {producto ? (
          <div className="detalleproducto-detalle-producto">
            <div className="detalleproducto-columna-izquierda">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="detalleproducto-columna-derecha">
              <h2 className="detalleproducto-nombre">{producto.nombre}</h2>
              <p className="detalleproducto-precio">{producto.precio}</p>
              <p className="detalleproducto-descripcion">{producto.descripcion}</p>

              <table className="detalleproducto-table">
                <tbody>
                  {keysOrden.map((key) =>
                    producto[key] ? (
                      <tr key={key}>
                        <th>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}</th>
                        <td>{producto[key]}</td>
                      </tr>
                    ) : null
                  )}
                </tbody>
              </table>

              {/* Botones de acción */}
              <div className="detalleproducto-acciones">
                <button className="detalleproducto-Btnwhatsapp">
                  <div className="detalleproducto-signwsp">
                    <svg className="detalleproducto-socialSvg detalleproducto-whatsappSvg" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </div>
                  <div className="detalleproducto-text">Whatsapp</div>
                </button>

                <div className="detalleproducto-cantidad">
                  <button id="btnMenos">-</button>
                  <span id="cantidad">1</span>
                  <button id="btnMas">+</button>
                </div>

                <div className="detalleproducto-botones">
                  <button className="detalleproducto-cartBtn">
                    <svg className="detalleproducto-cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                    Agregar al carrito
                  </button>

                  <input type="checkbox" id="favorite" name="favorite-checkbox" />
                  <label htmlFor="favorite" className="detalleproducto-container1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <div className="detalleproducto-action">
                      <span className="detalleproducto-option-1">Guardar Favorito</span>
                      <span className="detalleproducto-option-2">Guardado</span>
                    </div>
                  </label>
                </div>
              </div>

              <Link to="/productos">← Volver al catálogo</Link>
            </div>
          </div>
        ) : (
          <div>
            <p>Producto no encontrado.</p>
            <Link to="/productos">← Volver al catálogo</Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default DetalleProducto;
