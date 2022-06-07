import Image from "next/image"
import styles from "styles/SidebarItem.module.scss"
import clsx from "clsx"

export default function SidebarItem(props: any) {
  return (
    <>
      <div className="container-fluid p-0">
        <div className={clsx(styles.wrapper, "row")}>
          <div className="col-2">
            <Image src={props.icon} width="31px" height="31px" />
          </div>
          <div className="col-10">{props.name}</div>
        </div>
      </div>
    </>
  )
}
