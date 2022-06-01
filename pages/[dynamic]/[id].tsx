import { useRouter } from 'next/router';

export default function DynamicRouteNested() {
  const router = useRouter();
  const { query: { dynamic, id } } = router;
  return <>
    <p>Test dynamic nested {dynamic} - {id}</p>
    <button className="btn btn-success">test bootstrap</button>
    <div className="test-me">TEST SCSS</div>
  </>
}