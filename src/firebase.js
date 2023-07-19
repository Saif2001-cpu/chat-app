import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGan7vtTlmbWdhs3IeOY2M6NwyP-Aw7D0",
  authDomain: "chat-39965.firebaseapp.com",
  projectId: "chat-39965",
  storageBucket: "chat-39965.appspot.com",
  messagingSenderId: "422193527815",
  appId: "1:422193527815:web:79858e015717a64dd57ea2",
  measurementId: "G-968EPTHN02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();