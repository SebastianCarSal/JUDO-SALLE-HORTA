const express = require('express');
const { getJudokas } = require('../controllers/judokasController');
const { getNoticias } = require('../controllers/noticiasController');
const { bucket } = require('../firebase'); //


const router = express.Router();

// Rutas
router.get('/judokas', getJudokas);
router.get('/noticias', getNoticias);


router.get('/fotosCompetidores', async (req, res) => {
  try {
    // Listar los archivos en la carpeta "competidores" del bucket
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

    res.json(urls); 
  } catch (error) {
    console.error('Error al obtener las imágenes:', error.message);
    res.status(500).json({ error: 'No se pudieron obtener las imágenes' });
  }
});



module.exports = router;