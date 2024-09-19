//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-wCkrpqRuK1kBd1ZAB-47pSoEglEudrg",
  authDomain: "health-center-63ca0.firebaseapp.com",
  projectId: "health-center-63ca0",
  storageBucket: "health-center-63ca0.appspot.com",
  messagingSenderId: "939001438641",
  appId: "1:939001438641:web:f35d0b40f7abbc00d99d90",
  measurementId: "G-2N5NVRC98S"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};