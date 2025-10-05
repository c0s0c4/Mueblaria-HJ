
import "/home/ubuntu/Mueblaria-HJ-6/client/src/CSS/Home.css";
import "/home/ubuntu/Mueblaria-HJ-6/client/src/CSS/Menu.css";

function Home() {
return (
    <div className="home">
    <div>
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

    {/* Secciones */}
      <div className="home-asides">
        <div className="home-banner">
          <aside className="home-aside">
            <h2>Nosotros</h2>
            <p>
              Hermanos Jota es el redescubrimiento de un arte olvidado: crear
              muebles que no solo cumplen una función, sino que alimentan el alma...
            </p>
            <a href="/nosotros"><button type="button" className="home-button">VER MÁS</button></a>
          </aside>
        </div>

        <div className="home-banner">
          <aside className="home-aside">
            <h2>Productos destacados</h2>
            <div className="home-carrusel-contenido" id="carrusel-contenido">
              <div className="home-carrusel-caja" id="carrusel-caja">
                <div className="home-carrusel-elemento">
                  <img
                    className="home-imagenes"
                    src="KitDeImágenes/Biblioteca Recoleta.png"
                    alt="Biblioteca Recoleta"
                  />
                </div>
                <div className="home-carrusel-elemento">
                  <img
                    className="home-imagenes"
                    src="KitDeImágenes/Mesa Comedor Pampa.png"
                    alt="Mesa comedor Pampa"
                  />
                </div>
                <div className="home-carrusel-elemento">
                  <img
                    className="home-imagenes"
                    src="KitDeImágenes/Sillas Córdoba.png"
                    alt="Silla Córdoba"
                  />
                </div>
              </div>
            </div>
            <a href="/productos"><button type="button" className="home-button">VER MÁS</button></a>
          </aside>
        </div>

        <div className="home-banner">
          <aside className="home-aside">
            <h2>Contactate con nosotros</h2>
            <p>
              Ante cualquier consulta, puede ponerse en contacto con nosotros
              mediante el siguiente formulario
            </p>
            <a href="/contacto"><button type="button" className="home-button">CONTACTO</button></a>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/instagram-brands-solid-full.svg" alt="Instagram" />
        </a>
        <a
          href="https://wa.me/+541145678900?text=Hola%20quiero%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/whatsapp-brands-solid-full.svg" alt="WhatsApp" />
        </a>
        <a
          href="mailto:info@hermanosjota.com.ar?Subject=Consulta%20sobre%20nuestros%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/envelope-regular-full.svg" alt="e-mail" />
        </a>
        <a
          href="mailto:ventas@hermanosjota.com.ar?Subject=Consulta%20sobre%20nuestros%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/credit-card-regular-full.svg" alt="Sales" />
        </a>
      </footer>
    </div>
    </div>
  );
}

export default Home;
