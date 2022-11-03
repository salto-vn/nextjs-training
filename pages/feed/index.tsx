import FeedContent from "component/FeedContent"
import Sidebar from "component/Sidebar"
import styles from "styles/Feed.module.scss"
import { useSelector } from 'react-redux'
import VideoStream from 'component/Feed/VideoStream'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import { withProtected } from 'src/auth/route'

export function Feed({ auth }: any) {
  const counter = useSelector((state:any) => state.counter.count)
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>NextJS Training - { t('menuFeed') }</title>
      </Head>
      <div className="container-fluid p-0 feed">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <Sidebar />
          </div>
          <div className="col-md-6 col-sm-12">
            <FeedContent />
            <VideoStream />
          </div>
          <div className="col-md-3 col-sm-12">
            <span className={styles.counter}>{ t('userClicked', {"times": counter}) }</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default withProtected(Feed)
