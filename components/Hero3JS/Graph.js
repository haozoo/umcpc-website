import React, { useState, useEffect } from 'react'
import { a } from '@react-spring/three'
import Node from './Node'

const RANGE_Y = 10
const RANGE_H = 25
const NODES = 10

const Graph = () => {
  // const [play, setPlay] = useState(false)
  const [pos, setPos] = useState([])

  useEffect(() => {
    let positions = []

    for (let i = 0; i < NODES; i++) {
      positions.push([
        (Math.random() - 0.5) * RANGE_H,
        (Math.random() - 0.5) * RANGE_Y,
        (Math.random() - 0.5) * RANGE_H,
      ])
    }

    setPos(positions)
  }, [])

  return (
    <a.group>
      {pos.map((obj) => {
        return <Node position={obj} />
      })}
    </a.group>
  )
}

export default Graph
