import { useRouter } from 'next/router'

export default function DynamicRouteNested() {
  const router = useRouter()
  const { query: { dynamic, id } } = router
  return <>
    <b>Test dynamic nested {dynamic} - {id}</b>
    <button className="btn btn-success">test bootstrap</button>
    <div className="test-me">TEST SCSS</div>
  </>
}
