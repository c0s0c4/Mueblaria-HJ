const express = require('express');
const router = express.Router();
const productos = require('../data/productos'); // Archivo local con los datos (simula una DB)


//  GET /api/productos - Obtener todos los productos

router.get('/', (req, res) => {
  try {
    const { categoria } = req.query;

    // Filtrar por categoría si se envía por query param
    if (categoria) {
      const productosFiltrados = productos.filter(
        p => p.categoria.toLowerCase() === categoria.toLowerCase()
      );
      return res.json({
        success: true,
        cantidad: productosFiltrados.length,
        data: productosFiltrados
      });
    }

    // Si no hay filtro, devolver todos
    res.json({
      success: true,
      cantidad: productos.length,
      data: productos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error al obtener los productos',
      error: error.message
    });
  }
});


//  GET /api/productos/:id - Obtener un producto por ID

router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Validar que el ID sea un número
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        mensaje: 'El ID debe ser un número válido'
      });
    }

    const producto = productos.find(p => p.id === id);

    if (!producto) {
      return res.status(404).json({
        success: false,
        mensaje: `Producto con ID ${id} no encontrado`
      });
    }

    res.json({
      success: true,
      data: producto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error al obtener el producto',
      error: error.message
    });
  }
});


//  POST /api/productos - Crear un nuevo producto

router.post('/', (req, res) => {
  try {
    const { nombre, precio, categoria } = req.body;

    // Validar campos obligatorios
    if (!nombre || !precio || !categoria) {
      return res.status(400).json({
        success: false,
        mensaje: 'Faltan datos obligatorios (nombre, precio, categoria)'
      });
    }

    const nuevoProducto = {
      id: productos.length ? productos[productos.length - 1].id + 1 : 1,
      nombre,
      precio,
      categoria
    };

    productos.push(nuevoProducto);

    res.status(201).json({
      success: true,
      mensaje: 'Producto creado correctamente',
      data: nuevoProducto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error al crear el producto',
      error: error.message
    });
  }
});


// PUT /api/productos/:id - Editar un producto existente

router.put('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, precio, categoria } = req.body;

    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        mensaje: `Producto con ID ${id} no encontrado`
      });
    }

    // Actualizar solo los campos enviados
    if (nombre) productos[index].nombre = nombre;
    if (precio) productos[index].precio = precio;
    if (categoria) productos[index].categoria = categoria;

    res.json({
      success: true,
      mensaje: 'Producto actualizado correctamente',
      data: productos[index]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error al actualizar el producto',
      error: error.message
    });
  }
});


//  DELETE /api/productos/:id - Eliminar un producto

router.delete('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        mensaje: `Producto con ID ${id} no encontrado`
      });
    }

    const eliminado = productos.splice(index, 1);

    res.json({
      success: true,
      mensaje: 'Producto eliminado correctamente',
      data: eliminado[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error al eliminar el producto',
      error: error.message
    });
  }
});

// Exportar el router
module.exports = router;
