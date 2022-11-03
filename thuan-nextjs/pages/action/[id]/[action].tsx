import { useRouter } from "next/router";

export default function ActionPage(){
    const router = useRouter()
    const id = router.query.id as string
    const action = router.query.action as string
    return (
        <>
        <h2>Action ID: {id} </h2>
        <br/>
        <h2>Action: {action}</h2>
        </>
    )
}