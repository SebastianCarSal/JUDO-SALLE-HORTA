const { bucket } = require('../firebase');

// Función para obtener las imágenes de la carpeta "competidores"
const getCompetidoresImages = async () => {
  try {
    // Listar los archivos en la carpeta "competidores"
    const [files] = await bucket.getFiles({ prefix: 'competidores/' });

    // Generar URLs firmadas para cada archivo
    const urls = await Promise.all(
      files.map(async (file) => {
        const [url] = await file.getSignedUrl({
          action: 'read', 
          expires: '03-01-2030', 
        });
        return { name: file.name, url }; 
      })
    );

    return urls; 
  } catch (error) {
    throw new Error(`Error al obtener las imágenes: ${error.message}`);
  }
};

module.exports = {
  getCompetidoresImages,
};