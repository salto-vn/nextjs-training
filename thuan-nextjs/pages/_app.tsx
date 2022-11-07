import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useEffect } from 'react';
import Modal from '../components/Modal/modal';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle")
  },[])
  return (
  <Layout>
  <Component {...pageProps} />
  <Modal/>
  </Layout>
  )
}
