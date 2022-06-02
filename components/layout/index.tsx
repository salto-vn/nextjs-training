// components/layout.js

import Navbar from '../navbar'
import Footer from '../footer'

export default function Layout({ children } : { children : React.ReactElement}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}