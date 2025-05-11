const { getAllProducts } = require('../models/productosModel');

async function getProducts(req, res) {
  try {
    const users = await getAllProducts();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener users:', error);
    res.status(500).send('Error al obtener users');
  }
}

module.exports = { getProducts };