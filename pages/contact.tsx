import Head from "next/head"
import { useTranslation } from 'react-i18next'
import { withProtected } from 'src/auth/route'

export function Contact({ auth } : any) {
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

export default withProtected(Contact)
