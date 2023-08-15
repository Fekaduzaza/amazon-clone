import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR7lvH2kH0DvBli_dvefDV5sU7xlpQleU",
  authDomain: "clone-bd710.firebaseapp.com",
  projectId: "clone-bd710",
  storageBucket: "clone-bd710.appspot.com",
  messagingSenderId: "709785483363",
  appId: "1:709785483363:web:8f80c43bf68393ac902056",
  measurementId: "G-Q2GY4P6VXL",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };



