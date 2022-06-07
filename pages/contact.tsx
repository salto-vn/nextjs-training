import Head from "next/head"
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>NextJS Training - { t('menuContact') }</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>{ t('contactTitle') }</h1>
      <div>
        { t('contactContent') }
      </div>
    </>
  )
}
