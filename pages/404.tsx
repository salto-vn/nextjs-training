import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(function () {
      router.push("/")
    }, 3000)
  }, [])

  return (
    <>
      <h1>NOT FOUND PAGE</h1>
    </>
  )
}
