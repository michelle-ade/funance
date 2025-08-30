import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

var email = document.getElementById("email");
var password = document.getElementById("password");
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");

function signInUser (email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
function signUpUser (email, password){

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

signInBtn.addEventListener("click", signInUser(email, password));
signUpBtn.addEventListener("click", signUpUser(email, password));

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

    window.location.href = "index.html";
    // ...
  } else {
    // User is signed out
    // ...
  }
});
