import NotificationRedux from "../notification"

export default function Footer() {
  return <div className="" style={{
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: "100%",
  }}>
    <div>©2022 by Vuong</div>
    <NotificationRedux />
  </div>
}
