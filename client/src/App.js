import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Home from './components/Home.jsx';
import Nosotros from './components/Nosotros.jsx';
import ProductosCard from './components/ProductosCard.jsx';
import DetalleProducto from './components/DetalleProducto.jsx';
import Contacto from './components/Contacto.jsx';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/nosotros">Nosotros</Link> |{" "}
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

function App()  {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && !selectedProduct && (
        <ProductList
          productos={productos}
          onSelectProduct={setSelectedProduct}
        />
      )}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          onBack={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        {/* Menú de navegación */}
        <Navigation />

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<ProductosCard />} />
          <Route path="/productos/:productoKey" element={<DetalleProducto />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
