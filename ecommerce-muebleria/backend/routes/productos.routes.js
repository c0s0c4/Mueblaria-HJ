const express = require('express');
const router = express.Router();
const productos = require('../data/productos.js');
router.get('/', (req, res) => {
    res.json(productos);
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const producto = productos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});
module.exports = router;