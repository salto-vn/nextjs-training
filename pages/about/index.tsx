// @ts-ignore
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs"
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'

export default function AboutMe() {
  const [isShow, setShow] = useState<boolean>(false)
  const onClickImage = () => {
    setShow(true)
    alert("YOU CLICKED ME!")
  }

  return <ARCanvas
    camera={{ position: [0, 0, 0] }}
    dpr={0.5}
    onCreated={({ gl }: any) => {
      gl.setSize(250, 250)
    }}
  >
    <ambientLight />
    <pointLight position={[10, 10, 0]} />
    <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
      <mesh onClick={onClickImage}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
        {/* {isShow && <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />} */}
      </mesh>
    </ARMarker>
  </ARCanvas>
}
