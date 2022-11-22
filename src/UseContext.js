import { useContext } from "react"
import Context from "./Context"
import { ThemeContext } from "./ThemeContext"

const UseContext = () => {

    const context = useContext(ThemeContext)

    console.log(context)

    return (
        <>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Context />
        </>
    )
}

export default UseContext
