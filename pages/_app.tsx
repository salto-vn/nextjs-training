import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "component/Layout"
import "bootstrap/dist/css/bootstrap.css"
import "antd/dist/antd.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from "react"
import { ThemeProvider } from 'next-themes'
import "src/config/firebase.config"
import { AuthProvider } from 'src/auth/auth'
import AuthStateChanged from 'src/layout/AuthStateChanged'
import { UserProvider } from "@auth0/nextjs-auth0"

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])


  if (!showChild) {
    return null
  }

  if (typeof window !== "undefined") {
    if ( localStorage.getItem("lng") === null ) {
      localStorage.setItem("lng", "en")
    }
  }

  if (typeof window === "undefined") {
    return <></>
  } else {
    return (
      <ThemeProvider>
        <UserProvider>
          <AuthProvider>
            <AuthStateChanged>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthStateChanged>
          </AuthProvider>
        </UserProvider>
      </ThemeProvider>
    )
  }
}

export default MyApp
