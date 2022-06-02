import Image from "next/image";
import { useRouter } from "next/router";
import Error from "../public/error.svg";
import styles from '../styles/Error.module.scss';


// pages/404.js
export default function Custom404() {
  const router = useRouter();
  return <div className={styles.onError} >
    <div className={styles.containerError}>
      <div className={styles.contentError}>
        <Image src={Error} width={200} height={200} alt="error"

          // ==== provide this for dynamic image ====
          // placeholder="blur" 
          // blurDataURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" 
        />
        <p className={styles.textError}>
          Custom error page : 404 - Page not found
        </p>
        
        {/* instead of using link, use router push for example */}
        <a href="javascript:void(0)" onClick={()=> router.push("/")}>Back to homepage</a>
      </div>
    </div>
  </div>
}