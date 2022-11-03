import { Button } from 'antd'
import Head from "next/head"
import styles from "styles/About.module.scss"
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from 'store/slices/counterSlice'
import { withProtected } from 'src/auth/route'

import type { ReactElement } from 'react'
import Layout from 'component/Layout';
import type { NextPageWithLayout } from 'pages/_app';



export function About({ auth }: any) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const counter = useSelector((state: any) => state.counter.count)
  return (
    <>
      <Head>
        <title>NextJS Training - { t('menuAbout') }</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>{ t('aboutTitle') }</h1>
      <div>
        { t('aboutContent') }
      </div>
      <br />
      <div className={styles.counterBox}>
        <h1>Counter: <span className={styles.counter}>{counter}</span></h1>
        <Button type="primary" className={styles.plusButton} onClick={() => dispatch(increment())}>PLUS Counter</Button>
        <Button type="primary" danger onClick={() => dispatch(decrement())}>NEGATIVE Counter</Button>
      </div>
    </>
  )
}

export default withProtected(About)
