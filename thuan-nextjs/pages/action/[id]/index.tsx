import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Action(){
    const router = useRouter()
    const id = router.query.id as string
    return (
        <>
        <h1>Post: {id}</h1>
        <ul>
            <li>
            <Link href={`/action/${id}/first-action`}>First comment</Link>
            </li>
            <li>
            <Link href={`/action/${id}/second-action`}>Second comment</Link>
            </li>
        </ul>
        </>
    )
}