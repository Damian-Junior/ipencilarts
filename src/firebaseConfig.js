// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCICq1h_GwAfIysw_VxTxW5K4Lq3e522k",
  authDomain: "ipencilarts.firebaseapp.com",
  projectId: "ipencilarts",
  storageBucket: "ipencilarts.appspot.com",
  messagingSenderId: "183915334537",
  appId: "1:183915334537:web:ce99bcfbcc9e0729c4af58",
  measurementId: "G-CDTGWHDB62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);