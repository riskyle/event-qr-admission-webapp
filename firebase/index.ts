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
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDroR37bkWLjKQCVixOKMgU0xOh9xxrg0I",
    authDomain: "event-qr-admission.firebaseapp.com",
    projectId: "event-qr-admission",
    storageBucket: "event-qr-admission.appspot.com",
    messagingSenderId: "482730707395",
    appId: "1:482730707395:web:5a0a62c36cf32243609576",
    measurementId: "G-ZNTBG2Y8XM",
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
