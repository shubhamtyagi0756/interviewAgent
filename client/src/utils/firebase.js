
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-d430a.firebaseapp.com",
  projectId: "interviewai-d430a",
  storageBucket: "interviewai-d430a.firebasestorage.app",
  messagingSenderId: "600941237064",
  appId: "1:600941237064:web:d54075763923f05917d97d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}