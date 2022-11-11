import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../lib/firebase"
import { FirebaseUser } from "../type/type";

export const UserContext = createContext({user: null})
export default () => {
  const [user, setuser] = useState<FirebaseUser | null>(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user :any ) => {
    const { displayName, email }  = user 
    setuser({
        displayName,
        email
    })
})
  },[])
  
  return (
    <UserContext.Provider value={user}> {props.children} </UserContext.Provider>
  )
}