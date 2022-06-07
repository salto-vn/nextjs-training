import { useRouter } from "next/router"

export default function DetailDummy({ detailData }) {
  const router = useRouter()
  const { query: { id } } = router
  return <>
    <b>Detail of dummy number {id}</b>
  </>
}


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}


export async function getStaticProps(context: any) {
  const { id } = context.params
  const res = await fetch(`https://dummyjson.com/products/${id}`, { method: 'GET' })
  const detailData = await res.json()
  console.log("detailData ===", detailData)
  return {
    props: {
      detailData
    }
  }
}
