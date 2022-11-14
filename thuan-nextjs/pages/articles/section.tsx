import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Section(){
    const router = useRouter()
    const handlesubmit = useCallback((e:any)=> {
        e.preventDefault()
     fetch('https://l11ee.mocklab.io/json',{
        method:'POST',
        headers: {"Content-Type": "application/json",
            'Authorization': `Bearer 914c22330559de02c1e2ba2317a09e0f`
        },
        body: JSON.stringify({
            "id": 12345,
            "value": "abc-def-ghi"
        })
        }).then((res)=> {
            if (res.ok) 
            router.push('/articles')
        })
    },[])
    // const response =  fetch('http://l11ee.mocklab.io/json/1')
    // console.log(response)
    // },[])

     useEffect(()=> {
        router.prefetch('/articles')
    },[])

    return (
        
        <form onSubmit={handlesubmit}>
        <button type="submit">test</button>
        </form>
    )
}