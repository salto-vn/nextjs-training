import firebase from "firebase/compat/app"
import {getFirestore} from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { realTimeFireBase } from "../type/interface";
import { RealTimeFireBase } from "../type/type";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABa88jAbRm-bqMK3b9XlFwr4wZElhif6o",
  authDomain: "nextjs-login-firebase-581c8.firebaseapp.com",
  databaseURL: "https://nextjs-login-firebase-581c8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nextjs-login-firebase-581c8",
  storageBucket: "nextjs-login-firebase-581c8.appspot.com",
  messagingSenderId: "997111499921",
  appId: "1:997111499921:web:1eda515da47baedad14330",
  measurementId: "G-D4SGGS6RZ0"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

//connect firestore
const firestore = getFirestore(Firebase);
export {firestore}
export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    const data : any = {
      uid: res.user?.uid,
      displayName : res.user?.displayName,
      email: res.user?.email,
      emailVerified: res.user?.emailVerified,
      metadata: res.user?.metadata,
      providerData: res.user?.providerData
    }
    window.localStorage.setItem("client_user", JSON.stringify(data))
  }).catch((error) => {
    console.log(error.message)
  })
}