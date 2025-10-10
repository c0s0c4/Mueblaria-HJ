import React from "react";
import "../CSS/CartPopup.css";

function CartPopup({ isOpen, cart = [], onClose, onRemove, onQuantityChange }) {
  if (!isOpen) return null;

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-popup">
        <div className="cart-popup-content">
          <button className="close-btn" onClick={onClose}>✖</button>
          <h2>Carrito</h2>
          <p>Tu carrito está vacío.</p>
        </div>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + (parseFloat(item.precio) || 0) * (item.cantidad || 1),
    0
  );

  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Carrito</h2>

        <div className="cart-items-wrapper">
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-info">
                  <h4>{item.nombre}</h4>
                  <p>${item.precio}</p>
                  <div className="cart-quantity">
                    <button onClick={() => onQuantityChange(item.id, (item.cantidad || 1) - 1)} className="qty-btn">-</button>
                    <span>{item.cantidad || 1}</span>
                    <button onClick={() => onQuantityChange(item.id, (item.cantidad || 1) + 1)} className="qty-btn">+</button>
                  </div>
                </div>
                       <button
                className="remove-btn"
                onClick={() => onRemove(item.id)}
              > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>
              </li>
            ))}
          </ul>
        </div>

        <div className="cart-total">
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>

        <button className="checkout-btn">Finalizar compra</button>
      </div>
    </div>
  );
}

export default CartPopup;
