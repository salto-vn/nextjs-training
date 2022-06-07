import clsx from "clsx"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from "styles/Nextjs.module.scss"

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  return {
    props: { photos: data.products }
  }
}

export default function Nextjs({ photos }: any) {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [])

  return (
    <>
      <Head>
        <title>NextJS Training - NextJS</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>This is Nextjs Component</h1>
      <div>
        Cupidatat laborum commodo qui mollit duis occaecat ad ex proident mollit
        veniam ullamco occaecat deserunt. Id dolor aute officia minim ut
        cupidatat nulla proident amet deserunt. Dolor eu cupidatat aliquip
        commodo ipsum. Ut deserunt mollit dolore id occaecat laborum non
        commodo. Nulla voluptate aliquip eiusmod incididunt amet excepteur
        officia deserunt minim exercitation occaecat ad eu. Pariatur id quis
        elit nostrud in veniam voluptate velit quis cupidatat non. Sint
        exercitation sit nulla adipisicing sunt officia aute ex do sit non quis
        cupidatat. <br />
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {photos.length &&
            photos.map((photo: any) => (
              <div className="col-3 p-2" key={photo.id}>
                <div className="card" style={{width: "100%"}}>
                  <Link href={"/nextjs/" + photo.id}>
                    <a className={clsx(styles.singleLink, "card-img-top")}>
                      <Image
                        src={photo.thumbnail}
                        width="100%"
                        height="100%"
                        priority
                      />
                    </a>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{photo.title.length > 25 ? photo.title.substring(0, 24) + "..." :  photo.title}</h5>
                    <p className={clsx("card-text", styles.description)}>{photo.description}</p>
                    <a href={"/nextjs/" + photo.id} className="btn btn-danger w-100">
                      Go details
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
