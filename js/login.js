import {app, auth} from "./firebase"
import {onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail}
    from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        location.replace("welcome.html")
    }
})

export const login = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

export const signUp = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}

export const forgotPass = () => {
    const email = document.getElementById("email").value
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Reset link sent to your email id")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}