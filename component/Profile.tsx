import Image from "next/image"
import clsx from "clsx"
import styles from "styles/Profile.module.scss"

export default function Profile() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={clsx(styles.profilesBar, "col-12")}>
            <div className={styles.avatarImage}>
              <Image src="/avatar.webp" width="50px" height="50px" />
            </div>
            <span className={styles.userName}>Promance Lopez</span>
          </div>
        </div>
      </div>
    </>
  )
}
