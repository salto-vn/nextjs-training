import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
// import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <UserProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </UserProvider>
  )
}

export default MyApp
