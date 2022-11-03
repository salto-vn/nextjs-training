import SidebarItem from "component/Feed/SidebarItem"
import Profile from "component/Profile"
import SettingIcon from "assets/img/settings.png"
import LanguageIcon from "assets/img/languages.png"
import MemoriesIcon from "assets/img/time.png"
import { useTranslation } from 'react-i18next'

export default function Sidebar() {
  const { t } = useTranslation()
  return (
    <>
      <Profile />
      <hr />
      <SidebarItem icon={SettingIcon} name={ t('generalSetting') } />
      <SidebarItem icon={LanguageIcon} name={ t('langSetting') } />
      <SidebarItem icon={MemoriesIcon} name={ t('memoriesView')} />
    </>
  )
}
