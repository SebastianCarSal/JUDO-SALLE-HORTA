const { getAllUsers } = require('../models/usersModel');

async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener users:', error);
    res.status(500).send('Error al obtener users');
  }
}

module.exports = { getUsers };