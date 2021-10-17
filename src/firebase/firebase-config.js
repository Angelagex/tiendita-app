import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbP5X_tcQAGsr-xeXJe09kPtH1TUMZY3E",
    authDomain: "latiendita-cee5a.firebaseapp.com",
    projectId: "latiendita-cee5a",
    storageBucket: "latiendita-cee5a.appspot.com",
    messagingSenderId: "336330827113",
    appId: "1:336330827113:web:e407c5a897955c2605c9f8"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase };
