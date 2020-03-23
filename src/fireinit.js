// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDY6kouDVjBH3q161BXW5-279g2qYF2nCU",
  authDomain: "dokuin-web.firebaseapp.com",
  databaseURL: "https://dokuin-web.firebaseio.com",
  projectId: "dokuin-web",
  storageBucket: "dokuin-web.appspot.com",
  messagingSenderId: "78262058081",
  appId: "1:78262058081:web:43ce9eb9b8fbc71780fe20",
  measurementId: "G-7422SWCK7L"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// export const db = firebase.database();

export default firebase;
