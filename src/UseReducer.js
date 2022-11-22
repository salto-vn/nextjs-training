import { useReducer } from "react"

const UP = 'up'
const DOWN = 'down'
const initState = 0

const reducer = (state, action) => {
    switch(action) {
        case UP:
            return state + 1
        case DOWN:
            return state - 1
        default:
            throw new Error('Action invalid.')

    }
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(UP)}>Up</button>
        <button onClick={() => dispatch(DOWN)}>Down</button>
        </>
    )
}

export default UseReducer
