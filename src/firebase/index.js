// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGOn70WskPlQ9CAQVLfMCgPWihh8YfI70",
  authDomain: "kzagul-project.firebaseapp.com",
  projectId: "kzagul-project",
  storageBucket: "kzagul-project.appspot.com",
  messagingSenderId: "1042135566007",
  appId: "1:1042135566007:web:9ebe0c835a421c8d47af32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}