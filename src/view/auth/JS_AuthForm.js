import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite'; // Import Firestore
import {firebaseconfig} from "./register/JS_register.js"; // Importar la configuración de Firebase desde el archivo de registro



const firebaseConfigA = firebaseconfig;

// Inicialización de Firebase
const app = initializeApp(firebaseConfigA);
const auth = getAuth(app);
const db = getFirestore(app);  // Inicialización de Firestore


//transicion Form
        
        
//fin Trs Form
// Manejo del inicio de sesión
export const AuthFormlog= async({correo, contraseña}) =>{

    const email = correo;
    const password = contraseña;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Inicio de sesión exitoso");

        // Verificar si ya tiene un rol asignado
        const user = userCredential.user;
        const userRef = doc(db, "users", user.uid);  // Referencia al documento del usuario
        const userDoc = await getDoc(userRef);  // Obtener el documento

        if (userDoc.exists() && userDoc.data().role) {
            var role = userDoc.data().role;
            // Redirigir según el rol
            if (role === "profesor") {
                window.location.href = '/view-teachers';
;
            } else if (role === "student") {
                window.location.href = '/view-students';
;
            }
        } else {
            // Si no tiene rol, redirigir a la página de selección de roles
            window.location.href = '/view-rol';
;
        }
    } catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta');
        } else if (errorCode === 'auth/user-not-found') {
            alert('Usuario no encontrado');
        } else if (errorCode === 'auth/invalid-email') {
            alert('Correo no es válido');
        } else {
            alert('Error: ' + error.message);
        }
    }
};
/*
// Cerrar sesión
document.getElementById('cerrar').addEventListener('click', async (e) => {
    e.preventDefault();  // Prevenir el envío del formulario

    try {
        await signOut(auth);
        alert("Cierre de sesión exitoso");
        window.location.href = "/login.html";  // Redirigir al login después de cerrar sesión
    } catch (error) {
        alert('Error al cerrar sesión: ' + error.message);
    }
});
*/