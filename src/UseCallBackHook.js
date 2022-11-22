import { useCallback, useState } from "react"
import Content from "./Memo/Content"


function UseCallBackHook() {

    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(
        () => {
            setCount(prev => prev + 1)
        }, []
    )

    

    return (
        <>
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
            
        </>
    )
}

export default UseCallBackHook
