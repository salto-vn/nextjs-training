import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import {getFirestore} from "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.PP_API_KEY,
  authDomain: process.env.PP_AUTH_DOMAIN,
  projectId: process.env.PP_PROJECT_ID,
  storageBucket: process.env.PP_STORAGE_BUCKET,
  messagingSenderId: process.env.PP_MESSAGING_SENDER_ID,
  appId: process.env.PP_APP_ID,
  measurementId: process.env.PP_MEASUREMENT_ID
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

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
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}