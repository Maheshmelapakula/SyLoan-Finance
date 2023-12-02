// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3cEEOzVCGjw_nMHb-86tCR1NTEU0PdtA",
  authDomain: "finance-app-945ea.firebaseapp.com",
  projectId: "finance-app-945ea",
  storageBucket: "finance-app-945ea.appspot.com",
  messagingSenderId: "670709382625",
  appId: "1:670709382625:web:90467737de699f68c3e6a0",
  measurementId: "G-Q7P4ZSH9TP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);