import Router, { useRouter } from 'next/router'
import useAuth from './auth'

// @ts-ignore
export function withPublic(Component) {
  return function withPublic(props: any) {
    const auth = useAuth()
    // @ts-ignore
    if (auth.user) {
      Router.replace("/")
      return <></>
    }
    return <Component auth={auth} {...props} />
  }
}

// @ts-ignore
export function withProtected(Component) {
  return function withProtected(props: any) {
    const auth = useAuth()
    // @ts-ignore
    if (!auth.user) {
      Router.replace("/login")
      return <></>
    }
    return <Component auth={auth} {...props} />
  }
}

