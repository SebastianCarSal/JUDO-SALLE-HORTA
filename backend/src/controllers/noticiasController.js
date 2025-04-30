const { getAllNoticias } = require('../models/noticiasModel');

async function getNoticias(req, res) {
  try {
    const noticias = await getAllNoticias();
    res.json(noticias);
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    res.status(500).send('Error al obtener noticias');
  }
}

module.exports = { getNoticias };