import React from "react";

function Navbar({ cartCount, onNavigate, onCartClick }) {
  return (
    <header className="header">
      <nav className="nav-container">
<button onClick={() => onNavigate("home")} className="logo-button">
  <img src="./logo.svg" alt="logo" className="logo-img" />
  <h1 className="logo">HERMANOS JOTA</h1>
</button>

        <ul className="nav-menu">
          <li>
            <button onClick={() => onNavigate("home")} className="nav-link">
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("productos")}
              className="nav-link"
            >
              Productos
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("contacto")}
              className="nav-link"
            >
              Contacto
            </button>
          </li>
          <li>
            <div className="cart-icon" onClick={onCartClick}>
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
