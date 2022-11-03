import Image from "next/image"
import Script from "next/script"
import { Canvas, useFrame } from '@react-three/fiber'

export default function Cac() {
  return (
    <>
      <div>
        <div>
          <Image src="/logo.svg" alt="Logo" width="330" height="140" priority />
        </div>
        <button className="btn btn-primary w-100" onClick={() => {}}>
          Cave Button
        </button>
      </div>
      <div>
      
      {/* <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene> */}
      </div>
    </>
  )
}
