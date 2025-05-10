const { bucket } = require('../firebase');

// Función para obtener las imágenes de la carpeta "productos-tienda"
const getProductosTiendaImage = async () => {
  try {
    const [files] = await bucket.getFiles({ prefix: 'productos-tienda/' });

    const filteredFiles = files.filter((file) => !file.name.endsWith('/'));

    const urls = await Promise.all(
      filteredFiles.map(async (file) => {
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
  getProductosTiendaImage,
};