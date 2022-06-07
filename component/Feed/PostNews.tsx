import clsx from "clsx"
import Image from "next/image"
import styles from "styles/PostNews.module.scss"
import { Input } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faVideo,
  faImages,
  faFaceSmile
} from "@fortawesome/free-solid-svg-icons"

const { TextArea } = Input;

export default function PostNews() {
  return (
    <>
      <div className={clsx(styles.wrapper, "container-fluid", "p-0")}>
        <div className={clsx(styles.rowPostNews, "row")}>
          <div className={clsx(styles.imagePostNews, "col-2", 'text-center')}>
            <Image src="/avatar.webp" width="60px" height="60px" />
          </div>
          <div className="col-10">
            <TextArea
              className={styles.textAreaContent}
              placeholder="Controlled autosize"
              autoSize={{ minRows: 2, maxRows: 2 }}
            />
          </div>
        </div>
        <div className={clsx(styles.rowPostNews, "row")}>
          <div className="col-4 text-center">
          <a className={styles.link}>
              <FontAwesomeIcon icon={faVideo} className={clsx(styles.icon, styles.videok)} />
              <span className={styles.textAfter}>Create Video</span>
            </a>
          </div>
          <div className="col-4 text-center">
          <a className={styles.link}>
              <FontAwesomeIcon icon={faImages} className={clsx(styles.icon, styles.image)} />
              <span className={styles.textAfter}>Photos/Videos</span>
            </a>
          </div>
          <div className="col-4 text-center">
          <a className={styles.link}>
              <FontAwesomeIcon icon={faFaceSmile} className={clsx(styles.icon, styles.smile)} />
              <span className={styles.textAfter}>Feeling/Activity</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
