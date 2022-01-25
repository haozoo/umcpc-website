import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Bars from './Bars'

const lookAtOrigin = new THREE.Vector3(0, 0, 0)

// function CameraRotation() {
//   useFrame(({ clock, camera }) => {
//     const elapsedTime = clock.getElapsedTime()
//     // camera.position.x = Math.cos(elapsedTime * 0.25) * 10
//     // camera.position.z = Math.sin(elapsedTime * 0.25) * 10
//     camera.position.y = 5
//     camera.lookAt(lookAtOrigin)
//   })
//   return null
// }

const Hero3JS = () => {
  return (
    <div class="h-full w-full">
      <Canvas camera={{ fov: 90, position: [5, 1, 2] }}>
        <ambientLight />
        <pointLight position={[0, 0, 10]} />
        <Bars />
        {/* <CameraRotation /> */}
      </Canvas>
    </div>
  )
}

export default Hero3JS
