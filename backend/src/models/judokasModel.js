const { db } = require('../firebase');

// Función para obtener todos los judokas y sus medallas ordenados por ID
async function getAllJudokas() {
  const snapshot = await db.collection('judokas').get();
  const judokas = [];

  for (const doc of snapshot.docs) {
    const judokaData = doc.data();
    const medallasSnapshot = await db
      .collection('judokas')
      .doc(doc.id)
      .collection('medallas')
      .get();
    const medallas = medallasSnapshot.docs.map(medallaDoc => ({
      id: medallaDoc.id,
      ...medallaDoc.data(),
    }));

    judokas.push({
      id: doc.id,
      ...judokaData,
      medallas,
    });
  }

  // Ordenar los judokas numéricamente por ID
  judokas.sort((a, b) => Number(a.id) - Number(b.id));

  return judokas;
}

module.exports = { getAllJudokas };
