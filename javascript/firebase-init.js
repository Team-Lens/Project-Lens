// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqEinFNEbT60fxg_ig9AuadPQJjt48UXo",
    authDomain: "project-lens-a4781.firebaseapp.com",
    databaseURL: "https://project-lens-a4781-default-rtdb.firebaseio.com",
    projectId: "project-lens-a4781",
    storageBucket: "project-lens-a4781.appspot.com",
    messagingSenderId: "498275826443",
    appId: "1:498275826443:web:54c54f5fdc7925d50e400e",
    measurementId: "G-N91T52EGWC"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { database, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
