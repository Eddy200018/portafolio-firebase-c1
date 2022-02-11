// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfrqjI_y9XBxuJH_jQdW6pASrj2xZVSE8",
  authDomain: "portafolio-daniel.firebaseapp.com",
  projectId: "portafolio-daniel",
  storageBucket: "portafolio-daniel.appspot.com",
  messagingSenderId: "50406871237",
  appId: "1:50406871237:web:9bc89f5ab6f96e23aee0ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();// conexion a la BD
export {
  db,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
};
