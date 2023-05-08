import "expo-router/entry";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxqoX0ba2tUreWm01z4caR41SiQRSCPqk",
  authDomain: "neutral-6a6ef.firebaseapp.com",
  projectId: "neutral-6a6ef",
  storageBucket: "neutral-6a6ef.appspot.com",
  messagingSenderId: "124012310166",
  appId: "1:124012310166:web:f9b8fe60085cdf29189cb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
