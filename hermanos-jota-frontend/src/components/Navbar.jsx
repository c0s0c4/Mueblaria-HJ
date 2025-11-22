import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar({ cartCount, onNavigate, onCartClick }) {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

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
            <button onClick={() => onNavigate("crud-demo")} className="nav-link">
              DEMO CRUD
            </button>
          </li>

          <li>
            <button onClick={() => onNavigate("nosotros")} className="nav-link">
              Nosotros
            </button>
          </li>

          <li>
            <button onClick={() => onNavigate("productos")} className="nav-link">
              Productos
            </button>
          </li>

          <li>
            <button onClick={() => onNavigate("contacto")} className="nav-link">
              Contacto
            </button>
          </li>

          {/* ❤️ FAV */}
          <label className="containerheart">
            <input checked="checked" type="checkbox" />
            <div className="checkmark">
              <svg viewBox="0 0 256 256">
                <rect fill="none" height="256" width="256"></rect>
                <path
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  strokeWidth="20px"
                  stroke="#000"
                  fill="none"
                ></path>
              </svg>
            </div>
          </label>

          {/* 🛒 CARRITO */}
          <li>
            <div className="cart-icon" onClick={onCartClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width="30"
                height="30"
                fill="currentColor"
              >
                <path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528z" />
              </svg>

              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </li>

          {/* 🔐 LOGIN / REGISTRO / LOGOUT */}
          {!isAuthenticated && (
            <>
              <li>
                <button onClick={() => onNavigate("login")} className="nav-link">
                  Login
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("registro")} className="nav-link">
                  Registro
                </button>
              </li>
            </>
          )}

          {isAuthenticated && (
            <>
              <li className="nav-link">Hola, {user?.nombre || "Usuario"}</li>
              <li>
                <button onClick={logout} className="nav-link">
                  Cerrar sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;