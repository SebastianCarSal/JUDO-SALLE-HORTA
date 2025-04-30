const { getAllJudokas } = require('../models/judokasModel');

async function getJudokas(req, res) {
  try {
    const judokas = await getAllJudokas();
    res.json(judokas);
  } catch (error) {
    console.error('Error al obtener judokas:', error);
    res.status(500).send('Error al obtener judokas');
  }
}

module.exports = { getJudokas };