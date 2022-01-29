import React, { useEffect, useRef, useState } from 'react'
import { useSpring, a, config } from '@react-spring/three'

function Node({ position }) {
  // Get direct access to the THREE.Mesh object
  const ref = useRef()
  const [active, setActive] = useState(0)
  const [hovered, hover] = useState(false)

  const { spring } = useSpring({
    spring: hovered,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })

  const scale = spring.to([0, 1], [1, 1.5])
  const rotation = spring.to([0, 1], [0, 0.5 * Math.PI])
  const color = spring.to([0, 1], ['#81EC4E', '#FFBD54'])

  return (
    <a.mesh
      position={position}
      ref={ref}
      rotation-y={rotation}
      scale={scale}
      onClick={() => setActive(Number(!active))}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry attach="geometry" />
      <a.meshStandardMaterial roughness={0.9} attach="material" color={color} />
    </a.mesh>
  )
}

export default Node
