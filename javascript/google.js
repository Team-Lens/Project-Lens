import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";    
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

export function googleDatabase() {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const nameInput! = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const password1Input = document.getElementById('password1');
    const password2Input! = document.getElementById('password2');

    regBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the form from submitting by default

        // Get the values of the input fields
        const name = nameInput.value;
        const email = emailInput.value;
        const password1 = password1Input.value;
        const password2 = password2Input.value;

        if (password1 !== password2) {
            alert("Passwords do not match.");
            return; // Stop the registration process
        }

        createUserWithEmailAndPassword(auth, email, password1)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                set(ref(database, 'users/' + user.uid),{
                    name: name,
                    email: email,
                })
                // ...
                alert('user created!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert('errorMessage');
                // ..
        });

        loginBtn.addEventListener('click' ,(e) => {
            e.preventDefault(); // Prevent the form from submitting by default

            // Get the values of the input fields
            const email = emailInput.value;
            const password = password1Input.value;

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const dt = new Date();
                update(ref(database, 'users/' + user.uid),{
                        last_login: dt,
                })
                // ...
                alert("user logged in");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert('errorMessage');
            });
        })

        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    })
}