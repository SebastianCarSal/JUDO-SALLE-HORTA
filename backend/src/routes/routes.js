const express = require('express');
const { getJudokas } = require('../controllers/judokasController');
const { getNoticias } = require('../controllers/noticiasController');
const { getFotosCompetidores } = require('../controllers/competidoresController');
const { getFotosTienda } = require('../controllers/tiendaController'); 



const router = express.Router();

// Rutas
router.get('/judokas', getJudokas);
router.get('/noticias', getNoticias);
router.get('/fotosCompetidores', getFotosCompetidores);
router.get('/productosTienda', getFotosTienda);



module.exports = router;