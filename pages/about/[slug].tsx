import {useRouter} from 'next/router';

export default function DynamicRoute(){
  const router = useRouter();
  const {query: {id}} = router;
  return <>The dynamic route is {id}</>
}