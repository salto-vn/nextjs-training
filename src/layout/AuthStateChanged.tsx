import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "src/config/firebase.config"
import useAuth from "src/auth/auth"

// @ts-ignore
export default function AuthStateChanged({children}) {
  // @ts-ignore
  const { setUser } = useAuth()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <></>
  }

  return children
}
