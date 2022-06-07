import Image from "next/image"
import Link from "next/link"
import Error from "../public/error.svg"
import styles from '../styles/Error.module.scss'

// pages/404.js
export default function Custom404() {
  return <div className={styles.onError} >
    <div className={styles.containerError}>
      <div className={styles.contentError}>
        <Image src={Error} width={200} height={200} alt="error"

        // ==== provide this for dynamic image ====
        // placeholder="blur" 
        // blurDataURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" 

        />
        <div className={styles.textError}>
          Custom error page : 404 - Page not found
        </div>
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </div>
    </div>
  </div>
}
