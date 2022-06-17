/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { clsNotification, getNotification } from "../../slices/notificationSlice"
import styles from '../../styles/Notification.module.scss'
export default function NotificationRedux() {
  const dispatch = useDispatch()
  const notify = useSelector(getNotification)

  useEffect(() => {
    if (notify) {
      let timeInterval: any
      if (timeInterval) {
        clearTimeout(timeInterval)
      }
      timeInterval = setTimeout(() => {
        dispatch(clsNotification())
      }, 3000)
    }
  }, [notify])

  return <>
    {notify && <div className={styles.notification}>
      <>{notify}</>
    </div>}
  </>
}

