// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getStorage, connectStorageEmulator } from "firebase/storage"
import {getFunctions, connectFunctionsEmulator} from "firebase/functions"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBlbVt0Doz9mv3b12G7vCxz4c9SoXavRs",
  authDomain: "chats-r-us.firebaseapp.com",
  projectId: "chats-r-us",
  storageBucket: "chats-r-us.appspot.com",
  messagingSenderId: "1070564117624",
  appId: "1:1070564117624:web:6dd6849cfe98ae1f6ef18d"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app)


if (location.hostname === "127.0.0.1") {
  connectStorageEmulator(storage, "localhost", 9199, { disableWarnings: false });
  connectFirestoreEmulator(db, "localhost", 8080, { disableWarnings: false });
  connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: false });
  connectFunctionsEmulator(functions, "localhost", 5001, { disableWarnings: false });
}