// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import env from "react-dotenv";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.messagingSenderId
};

// // Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const storage = getStorage(appFirebase);
export const db = getFirestore(appFirebase);


