import "/home/ubuntu/client/client/src/CSS/ProductosCard.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productos } from "/home/ubuntu/client/client/src/productos.js";
import "/home/ubuntu/client/client/src/CSS/Menu.css";

function ProductosCard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClickDetalle = (id) => {
    navigate(`/productos/${id}`);
  };

  const productosFiltrados = Object.keys(productos).filter((id) =>
    productos[id].nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pc-root">
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

      <div className="pc-contenido-principal">
        <h1 className="pc-titulodeproductos">Productos</h1>
        <div className="pc-linea"></div>

        {/* Buscador */}
        <div className="pc-buscador-header">
          <div className="pc-InputContainer">
            <input
              id="pc-input"
              placeholder="Search"
              className="pc-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {search && (
            <ul id="pc-listadeproductos" className="pc-lista-productos">
              {productosFiltrados.map((id) => (
                <li key={id} data-id={id} onClick={() => handleClickDetalle(id)}>
                  {productos[id].nombre}
                </li>
              ))}
            </ul>
          )}

          <label className="pc-labelforsearch" htmlFor="pc-input">
            <svg className="pc-searchIcon" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </label>
        </div>

        {/* Cards de productos */}
        <div id="pc-productos-container" className="pc-productos">
          {Object.keys(productos).map((id) => {
            const p = productos[id];
            return (
              <div className="pc-card" key={id}>
                <img src={p.imagen} alt={p.nombre} width="200" />
                <div className="pc-card-content">
                  <h2 className="pc-nombreproductocard">{p.nombre}</h2>
                  <p className="pc-precio">{p.precio}</p>
                  <button
                    className="pc-btn pc-btnDetalle"
                    onClick={() => handleClickDetalle(id)}
                  >
                    Detalle de producto
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductosCard;
