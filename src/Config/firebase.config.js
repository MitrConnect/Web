// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableMultiTabIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCPTfeQW4DsiRne9o1LHvoDUNYnePIH3IM",
  authDomain: "mitra-1d750.firebaseapp.com",
  projectId: "mitra-1d750",
  storageBucket: "mitra-1d750.firebasestorage.app",
  messagingSenderId: "857393076007",
  appId: "1:857393076007:web:6c33eb95ff398d4db83b02",
  measurementId: "G-PD3MCL7CN4"
};

// Initialize Firebase

// Subsequent queries will use persistence, if it was enabled successfully
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

enableMultiTabIndexedDbPersistence(db);