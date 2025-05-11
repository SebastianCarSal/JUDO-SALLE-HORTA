const express = require('express');
const { getJudokas } = require('../controllers/judokasController');
const { getNoticias } = require('../controllers/noticiasController');
const { getFotosCompetidores } = require('../controllers/competidoresController');
const { getFotosTienda } = require('../controllers/tiendaController'); 
const { getUsers } = require('../controllers/usersController'); 
const { getProducts } = require('../controllers/productosController'); 

const router = express.Router();

// Rutas
router.get('/judokas', getJudokas);
router.get('/noticias', getNoticias);
router.get('/fotosCompetidores', getFotosCompetidores);
router.get('/productosTienda', getFotosTienda);
router.get('/users', getUsers);
router.get('/productos', getProducts);

module.exports = router;