const { getProductosTiendaImage } = require('../models/tiendaModel'); 

// Controlador para manejar la solicitud al endpoint /productosTienda
const getFotosTienda = async (req, res) => {
  try {
    const urls = await getProductosTiendaImage(); 
    res.json(urls); 
  } catch (error) {
    console.error('Error al obtener las imágenes:', error.message);
    res.status(500).json({ error: 'No se pudieron obtener las imágenes' });
  }
};

module.exports = {
    getFotosTienda,
};