import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "component/Layout"
import "bootstrap/dist/css/bootstrap.css"
import "antd/dist/antd.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import "src/config/firebase.config"
import { AuthProvider } from 'src/auth/auth'
import AuthStateChanged from 'src/layout/AuthStateChanged'
import { UserProvider } from "@auth0/nextjs-auth0"
import { wrapper } from "store/store" 

import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import createEmotionCache from 'src/createEmotionCache'
import theme from "styles/theme/lightThemeOptions"

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

const clientSideEmotionCache = createEmotionCache()

config.autoAddCss = false

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp(props: any) {
  const [showChild, setShowChild] = useState(false)
  const { Component, emotionCache = clientSideEmotionCache, pageProps} = props
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
    const getLayout = Component.getLayout ?? ((page: any) => page)
    return getLayout(
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <AuthProvider>
              <AuthStateChanged>
                <Component {...pageProps} />
              </AuthStateChanged>
            </AuthProvider>
          </UserProvider>
        </ThemeProvider>
      </CacheProvider>
    )
  }
}

export default wrapper.withRedux(MyApp)
