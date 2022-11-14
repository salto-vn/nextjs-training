import Image from "next/image"
import GaiXinh from "../../public/images/hinh_gai.jpg"
import { Inter } from "@next/font/google"
import localFont from '@next/font/local'
import Link from "next/link"
import React from "react"
const myfont = localFont({src: '../../public/font/NotoSerifJP-Regular.otf'})
const inter = Inter({subsets: ['vietnamese'] });

function Articles({response: Response} : any) {
  // const myLoader = ({src, width, quality}) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }


    return (
     <div className='container'>
      <h1>Article Page</h1>
      <h3>userId: {Response.userId}</h3>
      <h3>Id: {Response.id}</h3>
      <h3>Title: {Response.title}</h3>
      <p>{Response.body}</p>
      <Image 
      // loader={myLoader}
      src={GaiXinh}
      alt="Picture of the author"
      width={400}
      height={500}
      quality={100}
      priority
      // fill
      />
      <p className={inter.className}>置によって確保すること &Ntilde; &yen;</p>
      <p className={myfont.className}>確保することdfsdfsdf  &Ntilde; &yen;</p>

      {/* passHref legacyBehavior */}
      <Link className="btn btn-primary" href="/articles/section"> Click zooo</Link>

     </div>
    )
  }

export async function getServerSideProps() {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const data = process.env.ENV_VARIABLE
    const response = await request.json()
    return {props: { response }}
  }

export default Articles
  