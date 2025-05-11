const { db } = require('../firebase');

// Función para obtener todas las noticias
async function getAllUsers() {
  const snapshot = await db.collection('users').get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

module.exports = { getAllUsers };