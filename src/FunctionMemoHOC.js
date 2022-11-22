import { memo, useState } from "react"
import Content from "./Memo/Content"

//HOC higher order component


//Hook
//HOC
//Render props

function FunctionMemoHOC() {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Content />
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}

export default memo(FunctionMemoHOC)
