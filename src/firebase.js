import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsPspzV35YsWLC8VL2O-YzWPNXuvRvFzs",
  authDomain: "login-cb476.firebaseapp.com",
  projectId: "login-cb476",
  storageBucket: "login-cb476.appspot.com",
  messagingSenderId: "469605613810",
  appId: "1:469605613810:web:2161ebb3121b18aff8506b"
};

const app = firebase.initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);