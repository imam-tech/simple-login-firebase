import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2o3LouuT535Op3bDfnYT04M6JFBBRzDY",
  authDomain: "simple-login-firebase-958aa.firebaseapp.com",
  projectId: "simple-login-firebase-958aa",
  storageBucket: "simple-login-firebase-958aa.appspot.com",
  messagingSenderId: "82585400019",
  appId: "1:82585400019:web:fdc038a3fe4fa7d4675a26",
  measurementId: "G-Q68VNLEYQV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)