import "/home/ubuntu/client/client/src/CSS/Nosotros.css";
import "/home/ubuntu/client/client/src/CSS/Menu.css";

function Nosotros() {
  return (
    <div className="nosotros">

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

      <main className="nosotros-main">
        <h1 className="nosotros-h1">SOBRE NOSOTROS</h1>
        <h2 className="nosotros-h2">Un viaje espiritual</h2>

        <aside className="nosotros-nota">
          <h3 className="nosotros-h3">Primera Impresión</h3>
          <p className="nosotros-p">
            Una sensación de calidez y nostalgia te envuelve, como descubrir un
            tesoro familiar en perfectas condiciones. Hay un reconocimiento
            inmediato de calidad e intencionalidad.
          </p>
        </aside>

        <aside className="nosotros-nota">
          <h3 className="nosotros-h3">Conexión Más Profunda</h3>
          <p className="nosotros-p">
            Al explorar más, descubrís los detalles pensados: los materiales
            sustentables, los principios de diseño atemporal, la historia detrás
            de cada pieza. Te das cuenta de que esto no es solo mobiliario, es
            una filosofía de vida.
          </p>
        </aside>

        <aside className="nosotros-nota">
          <h3 className="nosotros-h3">Impacto Duradero</h3>
          <p className="nosotros-p">
            Vivir con Hermanos Jota se convierte en parte de tu ritual diario.
            Cada pieza envejece con gracia, desarrollando carácter mientras
            mantiene su belleza esencial. No solo compraste muebles; invertiste
            en un legado.
          </p>
        </aside>
      </main>

      <footer className="nosotros-footer">
        <a className="nosotros-a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/instagram-brands-solid-full.svg" alt="Instagram" />
        </a>

        <a className="nosotros-a"
          href="https://wa.me/+541145678900?text=Hola%20quiero%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/whatsapp-brands-solid-full.svg" alt="WhatsApp" />
        </a>

        <a className="nosotros-a"
          href="mailto:info@hermanosjota.com.ar?Subject=Consulta%20sobre%20nuestros%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/envelope-regular-full.svg" alt="e-mail" />
        </a>

        <a className="nosotros-a"
          href="mailto:ventas@hermanosjota.com.ar?Subject=Consulta%20sobre%20nuestros%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="KitDeImágenes/credit-card-regular-full.svg" alt="Sales" />
        </a>
      </footer>

    </div>
  );
}

export default Nosotros;
