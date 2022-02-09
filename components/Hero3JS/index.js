import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Graph from './Graph'
import Text from './Text'

const Hero3JS = () => {
  return (
    <Canvas
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 60, position: [-20, 8, 24], fov: 35 }}
    >
      <axesHelper />
      <ambientLight intensity={1} />
      <pointLight intensity={0.5} position={[0, 20, 0]} />
      <Suspense fallback={null}>
        <Graph />
        <Text />
      </Suspense>
    </Canvas>
  )
}

export default Hero3JS
