// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIdhMiVCfsx-uagLfb6phy9mnEcnqN_9U",
  authDomain: "proyectoecommercematiascollavi.firebaseapp.com",
  projectId: "proyectoecommercematiascollavi",
  storageBucket: "proyectoecommercematiascollavi.appspot.com",
  messagingSenderId: "393191590970",
  appId: "1:393191590970:web:7c459a3736b57bcc2cf903"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)