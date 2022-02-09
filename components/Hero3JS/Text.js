import React from 'react'
import { useTexture } from '@react-three/drei'

const Text = () => {
  const colorMap = useTexture('/algosarefun.png')
  return (
    <mesh
      receiveShadow
      position={[5, -2, 0]}
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
    >
      <planeGeometry args={[30, 35]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

export default Text
