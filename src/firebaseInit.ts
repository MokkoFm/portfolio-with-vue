import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "sergei-elsakov-portfolio-vue.firebaseapp.com",
  projectId: "sergei-elsakov-portfolio-vue",
  storageBucket: "sergei-elsakov-portfolio-vue.appspot.com",
  messagingSenderId: "936277687078",
  appId: "1:936277687078:web:dc754303f4cb3aafd9dfe7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
