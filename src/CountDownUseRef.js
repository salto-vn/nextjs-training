import { memo, useEffect, useRef, useState } from "react"

const CountDownUseRef = () => {

    const [count, setCount] = useState(60)

    const ref = useRef()
    const refPrev = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        refPrev.current = count
    }, [count])

    useEffect(() => {
        console.log(h1Ref.current)
    })

    const handleStart = () => {
        ref.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)

    }

    const handleStop = () => {
        clearInterval(ref.current)
    }

    console.log(count, refPrev.current)

    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default memo(CountDownUseRef)
