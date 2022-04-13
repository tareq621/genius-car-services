// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO6LWSIhVWl84M4l4FKqOCctQjkuu-jM8",
    authDomain: "genius-car-services-a0de1.firebaseapp.com",
    projectId: "genius-car-services-a0de1",
    storageBucket: "genius-car-services-a0de1.appspot.com",
    messagingSenderId: "894521411886",
    appId: "1:894521411886:web:1944a60b0d8b809031d2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;