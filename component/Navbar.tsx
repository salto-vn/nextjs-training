import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faArchive,
  faAtom,
  faContactBook,
  faChevronCircleRight,
  faCartFlatbed
} from "@fortawesome/free-solid-svg-icons"
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import { Select } from 'antd'
import { viTrans } from 'assets/lang/vi'
import { enTrans } from 'assets/lang/en'

const { Option } = Select;


import styles from "styles/Navbar.module.scss"
import { useEffect, useState } from 'react'

const handleChange = (value: string) => {
  localStorage.setItem("lng", value)
  i18n.changeLanguage(value)
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTrans },
      vi: { translation: viTrans }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  })

export default function Navbar() {
  const { t } = useTranslation()
  const [langI18, setLangI18] = useState(localStorage.getItem('lng') ?? "en")

  useEffect(() => {
    i18n.changeLanguage(langI18)
  }, [])

  return (
    <>
      <div className={styles.nav}>
        <div>
          <Link href="/">
            <a className={styles.link}>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              { t('menuHome') }
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>
              <FontAwesomeIcon icon={faArchive} className={styles.icon} />
              { t('menuAbout') }
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.link}>
              <FontAwesomeIcon icon={faContactBook} className={styles.icon} />
              { t('menuContact') }
            </a>
          </Link>
          <Link href="/feed">
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className={styles.icon}
              />
              Feed
            </a>
          </Link>
          <Select defaultValue={langI18} style={{ width: 120 }} onChange={handleChange}>
            <Option value="en">English</Option>
            <Option value="vi">Việt Nam</Option>
          </Select>
        </div>
        <div>
          <Link href="/nextjs">
            <a className={styles.link}>
              <FontAwesomeIcon icon={faCartFlatbed} className={styles.icon} />
              { t('menuCart', {"quantity": 20}) }
            </a>
          </Link>
          <Link href="/nextjs">
            <a className={styles.link}>
              <FontAwesomeIcon icon={faAtom} className={styles.icon} />
              NextJS
            </a>
          </Link>
          <Link href="/nuxtjs">
            <a className={styles.link}>
              <FontAwesomeIcon icon={faAtom} className={styles.icon} />
              NuxtJS
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
