const { db } = require('../firebase');

// Función para obtener todas los productos
async function getAllProducts() {
  const snapshot = await db.collection('productos').get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

module.exports = { getAllProducts };