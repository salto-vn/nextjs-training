import i18next from "i18next"
// import Image from "next/image"
// import UsFlag from "../../public/usFlag.svg"
// import VnFlag from "../../public/viFlag.svg"
// import JpFlag from "../../public/jpFlag.svg"

export default function LanguageSelection() {
  const onSwitchLanguage = (e: any) => {
    const lng = e.target.value
    i18next.changeLanguage(lng)
  }

  return <select className="form-select language-select" defaultValue={i18next.language} onChange={onSwitchLanguage} >
    <option value="en">
      EN
      {/* <Image width={32} height={24} src={UsFlag} alt="icon" /> */}
    </option>
    <option value="vi">
      VI
      {/* <Image width={32} height={24} src={VnFlag} alt="icon" /> */}
    </option>
    <option value="jp">
      JP
      {/* <Image width={32} height={24} src={JpFlag} alt="icon" /> */}
    </option>
  </select >
}
