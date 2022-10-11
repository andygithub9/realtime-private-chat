import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-MWh96OARrHKULsnJYB4WWpZtnJK2w6Y",
  authDomain: "chat-9f471.firebaseapp.com",
  projectId: "chat-9f471",
  storageBucket: "chat-9f471.appspot.com",
  messagingSenderId: "75372784252",
  appId: "1:75372784252:web:3ac4b14bc0d0137d8077f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()