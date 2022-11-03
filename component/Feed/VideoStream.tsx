// @ts-nocheck
import { Button } from 'antd'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from "styles/Feed.module.scss"

var localstream;

export default function VideoStream () {
  const [bgCount, setBgCount] = useState("none")
  const [disabledStop, setDisabledStop] = useState(true)
  const [disabledStart, setDisabledStart] = useState(false)
  const { t } = useTranslation()

  function stopStreaming() {
    setBgCount("none")
    setDisabledStop(!disabledStop)
    setDisabledStart(!disabledStart)
    var vid = document.getElementById('vid')
    vid.pause();
    vid.src = "";
    localstream.getTracks().forEach((x:any) => x.stop());
    console.log("all capture devices off");
  }

  function startStreaming() {
    setBgCount("block")
    setDisabledStop(!disabledStop)
    setDisabledStart(!disabledStart)
    setTimeout(() => {
      setBgCount("none")
      if (navigator.mediaDevices.getUserMedia !== null) {
        var options = { 
          video:true, 
          audio:true 
        };  
        navigator.getUserMedia(options, function(stream: any) { 
          var vid = document.getElementById('vid')
          vid.srcObject = stream;
          localstream = stream;
          vid.play();
          console.log(stream,"streaming");
        }, function(e) { 
          console.log("background error : " + e.name);
        }); 
      }
    }, 3000)
  }

  return (
    <>
     <div className={clsx('container', styles.videoStreamWrapper, 'p-0')}>
        <div className="row">
          <div className={clsx('col-12', styles.colWrapper, 'p-0')}>
            <div className={styles.videoCountDown} style={{ display: bgCount }}></div>
            <video id="vid" height="100%" width="100%" autoPlay className={styles.videoSteam} muted></video>
          </div>
        </div>
     </div>
     <div>
        <div className="container">
          <div className="col-12 text-center mt-2">
            <Button type="primary" danger onClick={stopStreaming} style={{ marginRight: "10px" }} disabled={disabledStop}>{ t('stopStream') }</Button>
            <Button type="primary" onClick={startStreaming} disabled={disabledStart}>{ t('startStream') }</Button>
          </div>
        </div>
     </div>
    </>
  )
}
