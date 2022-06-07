import React from "react"
import { Carousel, Rate } from "antd"
import Image from "next/image"
import styles from "styles/Nextjs.module.scss"
import Head from "next/head"

const contentStyle: React.CSSProperties = {
  height: "auto",
  color: "#fff",
  lineHeight: "150px",
  textAlign: "center",
  marginBottom: 0
}

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  const paths = data.products.map((product: any) => {
    return {
      params: { id: product.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch("https://dummyjson.com/products/" + id)
  const data = await res.json()
  return {
    props: { product: data }
  }
}

export default function DetailProduct({ product }: any) {
  return (
    <>
      <Head>
        <title>{product.title + ' - ' + product.description}</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Carousel autoplay>
              {product.images.map((item: any) => (
                <div>
                  <h3 style={contentStyle} className={styles.h3carousel}>
                    <Image src={item} width="500px" height="280px" />
                  </h3>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-8">
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <span className={styles.titleBranch}>Rate: </span>
            <span>
              <Rate allowHalf defaultValue={product.rating} />
            </span>
            <br />
            <span className={styles.titleBranch}>Branch: </span>
            <span>{product.brand}</span>
            <br />
            <span className={styles.titleBranch}>Price: </span>
            <span>$US {product.price}</span>
            <br />
            <span className={styles.titleBranch}>Stock: </span>
            <span>{product.stock}</span>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
