// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZGpBDEi1gjOa-piiNvlqL5ZxIFMRMdfI",
  authDomain: "curso-react-434ec.firebaseapp.com",
  projectId: "curso-react-434ec",
  storageBucket: "curso-react-434ec.appspot.com",
  messagingSenderId: "447119097707",
  appId: "1:447119097707:web:1c578dbcdd265da0d6162e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)