import * as firebase from "firebase/app"
import "firebase/auth"
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from 'src/config/firebase.config'
import { getApps, initializeApp } from 'firebase/app'
import { auth } from 'src/config/firebase.config';

export const AuthService = {
  loginWithEmail: async (email: any, password: any) => {
    try {
      const userRes = await signInWithEmailAndPassword(auth, email, password)
      const credential = GoogleAuthProvider.credentialFromResult(userRes)
      const token = credential?.accessToken
      const user = userRes.user
      console.log("[SUCCESS]", { credential, token, user })
      return {
        user: user
      }
    } catch (e: any) {
      const errorCode = e.code
      const errorMessage = e.message
      const email = e.email
      const credential = GoogleAuthProvider.credentialFromError(e)
      console.log("[FAILED]", { errorCode, errorMessage, email, credential });
      return {
        error: errorMessage
      }
    }
  },

  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider()
    try {
      const userRes = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(userRes)
      const token = credential?.accessToken
      const user = userRes.user
      console.log("[SUCCESS]", { credential, token, user })
      return {
        user: user
      }
    } catch (e: any) {
      const errorCode = e.code
      const errorMessage = e.message
      const email = e.email
      const credential = GoogleAuthProvider.credentialFromError(e)
      console.log("[FAILED]", { errorCode, errorMessage, email, credential });
      return {
        error: e.message
      }
    }
  },
  logout: async () => {
    await auth.signOut()
  }
}
