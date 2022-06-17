import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function ContactUs(props: any) {
  return <>
    <h3>{props.common.title}</h3>
  </>

}

export async function getStaticProps({ locale }: any) {
  const result = await serverSideTranslations(locale, ['common', 'footer'])
  const lang = result._nextI18Next.initialLocale
  const dataTranslate = result._nextI18Next.initialI18nStore[lang]
  return {
    props: {
      ...dataTranslate,
      // Will be passed to the page component as props
    },
  }
}



