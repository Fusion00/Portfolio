// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFeJ_3R8MQ_rBakuuGqWR83kAqU4DtCUo",
  authDomain: "portfolio-a1d40.firebaseapp.com",
  projectId: "portfolio-a1d40",
  storageBucket: "portfolio-a1d40.firebasestorage.app",
  messagingSenderId: "1035493957567",
  appId: "1:1035493957567:web:0373f6a47bc0d5a5f98b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);