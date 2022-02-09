import React, { useState, useEffect } from 'react'
import { a } from '@react-spring/three'
import Bar from './Bar'

const Graph = () => {
  const [pos, setPos] = useState([])

  useEffect(() => {
    let positions = []

    for (let i = -4; i <= 3; i++) {
      positions.push([4, -1, 2 * i])
    }

    setPos(positions)
  }, [])

  return (
    <a.group>
      {pos.map((obj) => {
        return <Bar key={obj} position={obj} />
      })}
    </a.group>
  )
}

export default Graph
