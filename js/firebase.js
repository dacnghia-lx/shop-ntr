// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMGrExQqAlVChfbGVuvjEJFUD9nnXXtyg",
  authDomain: "test-2037f.firebaseapp.com",
  projectId: "test-2037f",
  storageBucket: "test-2037f.firebasestorage.app",
  messagingSenderId: "899164226404",
  appId: "1:899164226404:web:30e9f7c02575c2a65fb071",
  measurementId: "G-EQKCBBWL6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);