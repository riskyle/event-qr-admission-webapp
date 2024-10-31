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
// !!!!!ORIGINAL FIREBASE!!!!!!
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API,
//   authDomain: "event-qr-admission.firebaseapp.com",
//   projectId: "event-qr-admission",
//   storageBucket: "event-qr-admission.appspot.com",
//   messagingSenderId: "482730707395",
//   appId: "1:482730707395:web:5a0a62c36cf32243609576",
//   measurementId: "G-ZNTBG2Y8XM",
// };

//  !!!!BACKER FIREBASE!!!!
const firebaseConfig = {
  apiKey: process.env.BACKER_FIREBASE_API,
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
