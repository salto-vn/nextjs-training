import SidebarItem from "component/Feed/SidebarItem"
import Profile from "component/Profile"
import SettingIcon from "assets/img/settings.png"
import LanguageIcon from "assets/img/languages.png"
import MemoriesIcon from "assets/img/time.png"
export default function Sidebar() {
  return (
    <>
      <Profile />
      <hr />
      <SidebarItem icon={SettingIcon} name={"Cài đặt chung"} />
      <SidebarItem icon={LanguageIcon} name={"Cài đặt ngôn ngữ"} />
      <SidebarItem icon={MemoriesIcon} name={"Ngày này năm trước"} />
    </>
  )
}
