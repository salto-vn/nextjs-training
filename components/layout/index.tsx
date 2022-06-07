// components/layout.js

import Navbar from '../navbar'
import Footer from '../footer'
import styles from '../../styles/Layout.module.scss'

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
