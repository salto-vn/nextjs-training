import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const Context = () => {

    const themeContext = useContext(ThemeContext)

    return (
        <>
            <p className={themeContext.theme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est ut dui viverra lacinia. In hac habitasse platea dictumst. Cras eu vestibulum elit. Donec pellentesque malesuada eleifend. Donec eget fermentum tellus. Praesent quis tempus elit. Praesent sollicitudin finibus mi eu fringilla. Praesent a luctus elit, at semper sapien. Quisque fermentum semper sem, id porttitor turpis accumsan sit amet. Maecenas purus diam, viverra eu hendrerit id, viverra quis nibh. Pellentesque bibendum justo tellus, a luctus mauris molestie eu. Donec egestas felis id quam posuere viverra a quis sem. Quisque gravida nulla id ante venenatis porta. Pellentesque fringilla, sem at finibus tristique, arcu libero lobortis ex, eget placerat erat justo vitae ex.
            </p>
        </>
    )
}

export default Context
