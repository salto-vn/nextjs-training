import { useAuth0 } from "@auth0/auth0-react"
import useTranslation from "next-translate/useTranslation"
// import { useTranslation } from "react-i18next"

export default function AboutMeDetail() {
  const { t } = useTranslation()

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello <b>{user?.name}</b>
        <button className="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>
          {t('logout')}
        </button>
      </div>
    )
  } else {
    return <button className="btn btn-success" onClick={() => loginWithRedirect()}>{t('common:login')}</button>
  }
}


