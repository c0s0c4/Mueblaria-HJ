import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} `);
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos.");
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

export default App;
