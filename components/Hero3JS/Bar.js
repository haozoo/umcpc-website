import React, { useEffect, useRef, useState } from 'react'
import { useSpring, a, config } from '@react-spring/three'
import { PropertyBinding } from 'three'

function Bar({ locale, height }) {
  // Get direct access to the THREE.Mesh object
  const ref = useRef()

  const [active, setActive] = useState(0)
  const [hovered, hover] = useState(false)
  const [currPos, setCurrPos] = useState([])

  useEffect(() => {
    setCurrPos(locale)
    console.log('---')
    console.log(currPos)
    console.log(locale)
  }, [])

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })

  const props = useSpring({
    xy: [currPos[0], currPos[1]],
  })

  const handleClick = () => {
    console.log(pos)
  }

  const scale = spring.to([0, 1], [1, 1.5])
  const rotation = spring.to([0, 1], [0, 0.5 * Math.PI])
  const color = spring.to([0, 1], ['#2F66A7', '#81EC4E'])
  const pos = spring.to(currPos[2], locale[2])

  return (
    <a.mesh
      position={[locale[0], locale[1], pos]}
      ref={ref}
      rotation-y={rotation}
      scale-y={scale}
      onClick={handleClick}
      // onClick={() => setActive(Number(!active))}

      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, height, 1]} />
      <a.meshStandardMaterial roughness={0.5} attach="material" color={color} />
    </a.mesh>
  )
}

export default Bar
