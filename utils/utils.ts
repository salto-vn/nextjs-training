
const setTokenLocalStorage = (token: string) => {
  if (typeof window.localStorage !== 'undefined') {
    const tokenEncrypt = window.btoa(token)
    localStorage.setItem('token', tokenEncrypt)
  }
}

const getTokenLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token') ? window.atob(localStorage.getItem('token') || "") : null
  }
  return null
}

const rmvTokenLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
  }
}

export { setTokenLocalStorage, getTokenLocalStorage, rmvTokenLocalStorage }
