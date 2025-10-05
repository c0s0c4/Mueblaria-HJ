import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/home/ubuntu/client/client/src/CSS/contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // aquí podés enviar los datos al backend
  };

  return (
    <div className="contacto">
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

      {/* Main */}
      <main className="contacto-main">
        <div className="contacto-container">
          <span className="contacto-big-circle"></span>
          <img src="/img/shape.png" className="contacto-square" alt="" />

          <div className="contacto-form-container">
            {/* Contenedor grid de 2 columnas */}
            <div className="contacto-form">

              {/* Columna izquierda: info */}
              <div className="contacto-info">
                <h3 className="contacto-title">Contactanos</h3>
                <p className="contacto-text">
                  Ante cualquier duda, reclamo o sugerencia, rellene el
                  siguiente formulario para poder ponernos en contacto con usted.
                </p>

                <div className="contacto-info-items">
                  <div className="contacto-information">
                    <img src="/img/location.png" className="contacto-icon" alt="Mapa" />
                    <p>Av. San Juan 2847, C1232AAB — San Cristóbal, CABA</p>
                  </div>
                  <div className="contacto-information">
                    <img src="/img/email.png" className="contacto-icon" alt="eMail general" />
                    <p>info@hermanosjota.com.ar</p>
                  </div>
                  <div className="contacto-information">
                    <img src="/img/email.png" className="contacto-icon" alt="eMail ventas" />
                    <p>ventas@hermanosjota.com.ar</p>
                  </div>
                  <div className="contacto-information">
                    <img src="/img/phone.png" className="contacto-icon" alt="Telefono" />
                    <p>+54 11 4567-8900</p>
                  </div>
                </div>

                <div className="contacto-social-media">
                  <p>Connect with us :</p>
                  <div className="contacto-social-icons">
                    <a href="https://www.facebook.com/?locale=es_LA">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/?lang=es">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna derecha: formulario */}
              <div className="contacto-form">
                <span className="contacto-circle one"></span>
                <span className="contacto-circle two"></span>

                <form onSubmit={handleSubmit} autoComplete="off">
                  <h3 className="contacto-title">Contactanos</h3>

                  {/* Nombre */}
                  <div className={`contacto-input-container ${form.name !== "" ? "contacto-focus" : ""}`}>
                    <input
                      type="text"
                      name="name"
                      className="contacto-input"
                      value={form.name}
                      onChange={handleChange}
                    />
                    <label>Nombre</label>
                    <span>Nombre</span>
                  </div>

                  {/* Email */}
                  <div className={`contacto-input-container ${form.email !== "" ? "contacto-focus" : ""}`}>
                    <input
                      type="email"
                      name="email"
                      className="contacto-input"
                      value={form.email}
                      onChange={handleChange}
                    />
                    <label>Email</label>
                    <span>Email</span>
                  </div>

                  {/* Teléfono */}
                  <div className={`contacto-input-container ${form.phone !== "" ? "contacto-focus" : ""}`}>
                    <input
                      type="tel"
                      name="phone"
                      className="contacto-input"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <label>Teléfono</label>
                    <span>Teléfono</span>
                  </div>

                  {/* Comentario */}
                  <div className={`contacto-input-container contacto-textarea ${form.message !== "" ? "contacto-focus" : ""}`}>
                    <textarea
                      name="message"
                      className="contacto-input"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    <label>Comentario</label>
                    <span>Comentario</span>
                  </div>

                  <input type="submit" value="Send" className="contacto-btn" />
                </form>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacto;
