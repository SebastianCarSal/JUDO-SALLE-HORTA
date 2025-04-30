const express = require('express');
const { getJudokas } = require('../controllers/judokasController');
const { getNoticias } = require('../controllers/noticiasController');

const router = express.Router();

// Rutas
router.get('/judokas', getJudokas);
router.get('/noticias', getNoticias);

module.exports = router;