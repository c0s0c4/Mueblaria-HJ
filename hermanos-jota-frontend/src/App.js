import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductosCard from "./components/ProductCard";
import DetalleProducto from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";
import "./App.css";

// Importar productos desde el archivo local dentro de src
import { productos } from "./PRODUCTOS";
import { productos as productosDetalle } from "./productosDetalle";
import CartPopup from "./components/CartPopup"; // ✅ Nuevo


function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅ Nuevo

  // Simular fetch de productos
  useEffect(() => {
    try {
      setProductos(productosDetalle);
    } catch (err) {
      console.error("Error al cargar productos:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Seleccionar producto completo por id
  const handleSelectProduct = (id) => {
    const productoFull = productosDetalle[id];
    if (productoFull) {
      setSelectedProduct(productoFull);
      setCurrentView("detalle");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.error("Producto no encontrado:", id);
    }
  };

  const handleBackToCatalog = () => {
    setSelectedProduct(null);
    setCurrentView("productos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Añadir al carrito
  const handleAddToCart = (producto) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === producto.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + (producto.cantidad || 1) }
            : item
        );
      }
      return [...prevCart, { ...producto, cantidad: producto.cantidad || 1 }];
    });
  };

  // ✅ Eliminar producto del carrito
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Cambiar cantidad
  const handleQuantityChange = (id, newCantidad) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(newCantidad, 1) } : item
      )
    );
  };

  // ✅ Mostrar/ocultar carrito
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

  // --- Renderizado dinámico ---
  const renderContent = () => {
    if (currentView === "detalle" && selectedProduct) {
      return (
        <DetalleProducto
          producto={selectedProduct}
          onBack={handleBackToCatalog}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (currentView === "contacto") {
      return <ContactForm />;
    }

    if (currentView === "productos") {
      return (
        <ProductosCard
          productos={productos}
          loading={loading}
          error={error}
          onSelectProduct={handleSelectProduct}
        />
      );
    }

    // --- Vista Home ---
    return (
      <>
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1>EL ARTE DE CREAR MUEBLES QUE ALIMENTAN EL ALMA</h1>
              <p className="hero-subtitle">
                Donde la herencia se encuentra con la innovación
              </p>
              <p className="hero-description">
                Cada pieza cuenta la historia de manos expertas y materiales nobles.
                Redescubrimos el arte olvidado de crear muebles que no solo sirven
                una función, sino que se convierten en legado.
              </p>
              <div className="cta-buttons">
                <button
                  onClick={() => handleNavigate("productos")}
                  className="btn btn-primary"
                >
                  Ver Colección
                </button>
                <button
                  onClick={() => handleNavigate("contacto")}
                  className="btn btn-secondary"
                >
                  Contacto
                </button>
              </div>
            </div>

            <div className="banner">
              <aside>
                <div id="carrusel-contenido">
                  <div id="carrusel-caja">
                    <div className="carrusel-elemento">
                      <img
                        className="imagenes"
                        src="https://i.postimg.cc/3rjT3PnW/Sillas-C-rdoba.png"
                        alt="Sillas Córdoba"
                      />
                    </div>
                    <div className="carrusel-elemento">
                      <img
                        className="imagenes"
                        src="https://i.postimg.cc/zXJ1v0cF/Sill-n-Copacabana.png"
                        alt="Sillón Copacabana"
                      />
                    </div>
                    <div className="carrusel-elemento">
                      <img
                        className="imagenes"
                        src="https://i.postimg.cc/j2h0v7DY/Silla-de-Trabajo-Belgrano.png"
                        alt="Silla de Trabajo Belgrano"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">PRODUCTOS DESTACADOS</h2>
              <p className="section-subtitle">
                Un adelanto de nuestra colección artesanal
              </p>
            </div>

            <div className="products-grid">
              {Object.values(productos).slice(0, 3).map((producto) => (
                <div
                  key={producto.id}
                  className="product-card"
                  onClick={() => handleSelectProduct(producto.id)}
                >
                  <div className="product-image">
                    <div className="sustainability-badge">
                      {producto.certificacion}
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{producto.nombre}</h3>
                    <p className="product-description">
                      {producto.descripcion?.substring(0, 80)}...
                    </p>
                    <div className="product-price">${producto.precio}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-header" style={{ marginTop: "2rem" }}>
              <button
                onClick={() => handleNavigate("productos")}
                className="btn btn-secondary"
              >
                Ver Todos los Productos
              </button>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="App">
      <Navbar
        cartCount={cartCount}
        onNavigate={handleNavigate}
        onCartClick={toggleCart} // ✅ Nuevo
      />

      <main>{renderContent()}</main>

      <CartPopup
        isOpen={isCartOpen}
        cart={cart}
        onClose={toggleCart}
        onRemove={handleRemoveFromCart}
        onQuantityChange={handleQuantityChange}
      />

      <Footer />
    </div>
  );
}

export default App;
