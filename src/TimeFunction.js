import { useEffect, useState } from "react"


const TimeFunction = () => {

  const [countDown, setCountDown] = useState(180)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setCountDown(prevState => prevState - 1)
    }, 1000)

    return () => clearTimeout(timeId)
  }, [countDown])
  

  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  )
}

export default TimeFunction
