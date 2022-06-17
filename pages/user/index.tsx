import { useDispatch } from "react-redux"
import { setNotification } from "../../slices/notificationSlice"

export default function UserRedux() {
  const dispatch = useDispatch()
  return <>
    <h1>Toogle notification in 3 seconds</h1>
    <button className="btn btn-primary" onClick={() => {
      dispatch(setNotification("Testing redux with notification"))
    }}>Click me to show notification</button>
  </>
}
