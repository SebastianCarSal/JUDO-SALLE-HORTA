const { getCompetidoresImages } = require('../models/competidoresModel');

// Controlador para manejar la solicitud al endpoint /fotosCompetidores
const getFotosCompetidores = async (req, res) => {
  try {
    const urls = await getCompetidoresImages(); 
    res.json(urls); 
  } catch (error) {
    console.error('Error al obtener las imágenes:', error.message);
    res.status(500).json({ error: 'No se pudieron obtener las imágenes' });
  }
};

module.exports = {
  getFotosCompetidores,
};