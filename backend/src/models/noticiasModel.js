const { db } = require('../firebase');

// Función para obtener todas las noticias
async function getAllNoticias() {
  const snapshot = await db.collection('noticias').get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

module.exports = { getAllNoticias };