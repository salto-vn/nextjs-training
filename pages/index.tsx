import styles from "styles/Home.module.scss"
import Image from "next/image"
import Head from "next/head"
import { withProtected } from 'src/auth/route'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import type { ReactElement } from 'react'
import Layout from 'component/Layout';
import type { NextPageWithLayout } from 'pages/_app';

const DynamicComponent = dynamic(() => import("component/CacComponent"), { ssr: false })

const Home: NextPageWithLayout = ({ auth } : any) => {
  const { t } = useTranslation()
  const { logout } = auth

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <>
      <Head>
        <title>NextJS Training - { t('menuHome') }</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
       <DynamicComponent />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default withProtected(Home)
