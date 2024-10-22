// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKx9ox4_r82rZjc-yQhdkb4qdnQ3uERYQ",
  authDomain: "event-qr-admission-backer.firebaseapp.com",
  projectId: "event-qr-admission-backer",
  storageBucket: "event-qr-admission-backer.appspot.com",
  messagingSenderId: "834742315666",
  appId: "1:834742315666:web:c2da602c2d6f133da5544b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const employeeDocRef = collection(db, "employee");
export const queryEmployee = query(
  employeeDocRef,
  where("isScanned", "==", true),
  orderBy("scannedAt", "desc"),
  limit(1)
);
