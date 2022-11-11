import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Provider} from 'react-redux';
import store from '../store';
import { useEffect } from 'react';
import Modal from '../components/Modal/loginModal';
import SignUpModal from "../components/Modal/regisModal"
export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle")
  },[])
  return (
  <Provider store={store}>
    <Layout>
        <Component {...pageProps} />
        <SignUpModal />
        <Modal />
    </Layout>
  </Provider>
  )
}
