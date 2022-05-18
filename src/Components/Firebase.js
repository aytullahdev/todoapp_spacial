// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgVZQPkLMpN00q84Pupu8t41M6fRd1JVs",
  authDomain: "todospacial.firebaseapp.com",
  projectId: "todospacial",
  storageBucket: "todospacial.appspot.com",
  messagingSenderId: "1019478193023",
  appId: "1:1019478193023:web:b062104c5159025108204a",
  measurementId: "G-MKMJH6Y14C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;