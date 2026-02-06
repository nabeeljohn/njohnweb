import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvxJMBlBevV7b-Vi3dfawF4DyRy9ayNw",
  authDomain: "nextupdata-8d635.firebaseapp.com",
  projectId: "nextupdata-8d635",
  storageBucket: "nextupdata-8d635.firebasestorage.app",
  messagingSenderId: "71688453802",
  appId: "1:71688453802:web:854699e373c69941691ad3",
};

// Prevent Firebase from initializing twice in Next.js
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// 🔥 Firestore instance
export const db = getFirestore(app);
