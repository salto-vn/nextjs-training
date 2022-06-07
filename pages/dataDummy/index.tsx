
import { useRouter } from "next/router"

export default function DummyData({ datas }: { datas: any }) {
  const router = useRouter()
  return <>
    <h3>getStaticProps with dataDummy</h3>
    <div>
      {datas.map((data: any) => (
        <div key={data.id} >
          <a type="button" onClick={() => router.push(`/dataDummy/${data.id}`)}>{data.title}</a>
        </div>
      ))}
    </div>
  </>
}

export async function getStaticProps(context: any) {
  const callApi = await fetch('https://dummyjson.com/products', { method: 'GET' })
  const getData = await callApi.json()
  return {
    props: {
      datas: getData.products
    },
    revalidate: 10,
  }
}
