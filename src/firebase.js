// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDWTtl1raUMtvrKXLUYpYacXurKoKQgU-U",
    authDomain: "video-d43da.firebaseapp.com",
    projectId: "video-d43da",
    storageBucket: "video-d43da.appspot.com",
    messagingSenderId: "926125900325",
    appId: "1:926125900325:web:4ebfc71c2934354086f5cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;