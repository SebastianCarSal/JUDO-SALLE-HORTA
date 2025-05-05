require('dotenv').config();

const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage'); 

initializeApp({
  credential: applicationDefault(),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
});

const db = getFirestore();
const bucket = getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET); 

module.exports = {
  db,
  bucket, 
};