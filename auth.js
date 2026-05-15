/**
 * Firebase Authentication Module for MuEditor Pro
 * Manages user sessions and access protection.
 */

// Your web app's Firebase configuration
// TODO: Replace with your actual credentials from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyApyCE1bVLj2H6NbfXDZgK6jKddNbjPQaE",
  authDomain: "mueditorpro-17170.firebaseapp.com",
  projectId: "mueditorpro-17170",
  storageBucket: "mueditorpro-17170.firebasestorage.app",
  messagingSenderId: "170141357160",
  appId: "1:170141357160:web:19435a2614d2121a2257dd",
  measurementId: "G-4GZBFWMSN5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPass = document.getElementById('loginPassword');
    const loginError = document.getElementById('loginError');
    const loginScreen = document.getElementById('login-screen');
    const appContent = document.getElementById('app-content');
    const btnLogin = document.getElementById('btnLogin');
    const btnText = btnLogin.querySelector('.btn-text');
    const btnLoader = btnLogin.querySelector('.btn-loader');

    // Monitor Auth State
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            console.log("Sesión iniciada:", user.email);
            loginScreen.style.display = 'none';
            appContent.style.display = 'block';
            
            // Only initialize the app if it hasn't been initialized yet
            if (typeof init === 'function' && !window.appInitialized) {
                window.appInitialized = true;
                init();
            }
        } else {
            // User is signed out
            loginScreen.style.display = 'flex';
            appContent.style.display = 'none';
        }
    });

    // Handle Login Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = loginEmail.value;
        const password = loginPass.value;
        
        // UI Feedback
        btnText.textContent = 'Verificando...';
        btnLoader.style.display = 'inline-block';
        btnLogin.disabled = true;
        loginError.style.display = 'none';

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Success - onAuthStateChanged will handle the UI
            })
            .catch((error) => {
                console.error("Auth Error:", error.code);
                
                // Simplified, non-technical error message
                loginError.textContent = "Correo electrónico o contraseña incorrectos. Por favor, verifica tus datos.";
                loginError.style.display = 'block';
                
                // Reset Button
                btnText.textContent = 'Ingresar al Editor';
                btnLoader.style.display = 'none';
                btnLogin.disabled = false;
            });
    });
});

// Global Logout function
window.logout = function() {
    auth.signOut().then(() => {
        window.location.reload();
    });
};
