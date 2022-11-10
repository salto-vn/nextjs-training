import Firebase from "firebase/compat/app"
import "firebase/compat/auth"

const FirebaseCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

if (!Firebase.apps.length) {
    Firebase.initializeApp(FirebaseCredentials)
  }

export default Firebase