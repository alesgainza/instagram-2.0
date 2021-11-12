// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_rRSg2kCmKy-4RMipU0F6o5e2ByzDbOk",
  authDomain: "insta-2-9dcc2.firebaseapp.com",
  projectId: "insta-2-9dcc2",
  storageBucket: "insta-2-9dcc2.appspot.com",
  messagingSenderId: "1047324770398",
  appId: "1:1047324770398:web:acbf89279bab118845f4cf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
