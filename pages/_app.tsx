import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css"
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
// import I18nProvider from 'next-translate/I18nProvider'
import useTranslation from 'next-translate/useTranslation'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { useEffect } from 'react'
// import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation()
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap")
  // }, [])

  return (
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
        redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URI}
      >
        <ThemeProvider disableTransitionOnChange>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Auth0Provider>
    </Provider>
  )
}

export default MyApp
