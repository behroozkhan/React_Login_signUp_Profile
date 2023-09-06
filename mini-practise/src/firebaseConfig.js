import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword ,onAuthStateChanged,signOut  ,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore , setDoc,doc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-g-EUdYqNXXeusNCSdhbtEx2perfIer4",
  authDomain: "react-chatapp-ad4e0.firebaseapp.com",
  projectId: "react-chatapp-ad4e0",
  storageBucket: "react-chatapp-ad4e0.appspot.com",
  messagingSenderId: "537387481451",
  appId: "1:537387481451:web:4914fd93bd0c261860342e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,db,onAuthStateChanged,signOut ,signInWithEmailAndPassword,createUserWithEmailAndPassword ,doc,setDoc,}