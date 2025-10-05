const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware para parsear JSON
app.use(express.json());
// Middleware de logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Peticion recibida: ${req.method} ${req.url}`);
    next();
});
app.use(cors());
// Rutas
const productosRoutes = require('./routes/productos.routes');
// Usar las rutas
app.use('/api/productos', productosRoutes);
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor' });
});
//Inicializacion del servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});