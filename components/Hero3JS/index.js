import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Graph from './Graph'

const lookAtOrigin = new THREE.Vector3(0, 0, 0)

const CAMERA_RADIUS = 15
const CAMERA_SPEED = 0.5

function CameraRotation() {
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime()
    camera.position.x = Math.cos(elapsedTime * CAMERA_SPEED) * CAMERA_RADIUS
    camera.position.z = Math.sin(elapsedTime * CAMERA_SPEED) * CAMERA_RADIUS
    camera.position.y = Math.sin(elapsedTime * CAMERA_SPEED) * CAMERA_RADIUS
    camera.lookAt(lookAtOrigin)
  })
  return null
}

const Hero3JS = () => {
  return (
    <div class="bg-club-blue-900 h-full w-full">
      <Canvas camera={{ fov: 75, position: [20, 0, 0] }}>
        <ambientLight />
        <pointLight position={[0, 0, 10]} />
        <Graph />
        <CameraRotation />
      </Canvas>
    </div>
  )
}

export default Hero3JS
