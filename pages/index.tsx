import styles from "styles/Home.module.scss"
import Image from "next/image"
import Head from "next/head"
import { withProtected } from 'src/auth/route'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

export function Home ({ auth} : any){
  const { t } = useTranslation()
  const { logout } = auth
  return (
    <>
      <Head>
        <title>NextJS Training - { t('menuHome') }</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image src="/logo.svg" alt="Logo" width="330" height="140" priority />
        </div>
        <button className="btn btn-primary w-100" onClick={logout}>{ t('logOut') }</button>
        <p>
          { t('homeC') }
        </p>
      </div>
    </>
  )
}

export default withProtected(Home)
