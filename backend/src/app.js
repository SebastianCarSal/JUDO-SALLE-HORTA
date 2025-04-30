const express = require('express');
const morgan = require('morgan');
const { db } = require('./firebase');  
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());

//devuelve la coleccion judokas y la su correspondiente subcoleccion medallas, con un ID que
//corresponde al nombre del documento correspondiente
app.get('/judokas', async (req, res) => {
  try {
    const snapshot = await db.collection('judokas').get();
    const judokas = [];

    for (const doc of snapshot.docs) {
      const judokaData = doc.data();
      const medallasSnapshot = await db.collection('judokas').doc(doc.id).collection('medallas').get();
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

    res.json(judokas);
  } catch (error) {
    console.error('Error al obtener datos de Firestore:', error);
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/noticias', async (req, res) => {
  try {
    const snapshot = await db.collection('noticias').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    console.error('Error al obtener datos de Firestore:', error);
    res.status(500).send('Error al obtener datos');
  }
});

module.exports = app;
