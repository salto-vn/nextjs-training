import { createContext, useContext, useState } from 'react'
import { AuthService } from './AuthService'

const authContext = createContext({})

export default function useAuth() {
  return useContext(authContext)
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")

  const loginWithGoogle = async () => {
    // @ts-ignore
    const {error, user} = AuthService.loginWithGoogle();
    setUser(user ?? null)
    setError(error ?? "")
  }

  const loginWithEmail = async (email: any, password: any) => {
    // @ts-ignore
    const {error, user} = AuthService.loginWithEmail(email, password);
    setUser(user ?? null)
    setError(error ?? "")
  }

  const logout = async () => {
    await AuthService.logout()
    setUser(null)
  }

  const value = {user, error, loginWithGoogle, logout, setUser, loginWithEmail, setError}

  return <authContext.Provider value={value} {...props} />
}
