import React, { useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/three'
import Bar from './Bar'

const bars = [
  { id: 0, pos: [0, 0, -4], height: 1 },
  { id: 1, pos: [0, 0, -2], height: 3 },
  { id: 2, pos: [0, 0, 0], height: 2 },
  { id: 3, pos: [0, 0, 2], height: 4 },
]

const swap = (obj1, obj2) => {
  let tmp = obj1
  obj1 = obj2
  obj2 = tmp
}

const Bars = () => {
  const POS = [
    [0, 0, -4],
    [0, 0, -2],
    [0, 0, 0],
    [0, 0, 2],
    // [0, 0, 4],
    // [0, 0, 6],
  ]
  const [play, setPlay] = useState(false)
  const [pos, setPos] = useState(POS)

  // time animation
  useEffect(() => {
    setTimeout(() => {
      let tmpa = [...pos]
      let tmp = tmpa[0]
      tmpa[0] = tmpa[1]
      tmpa[1] = tmp

      setPos(tmpa)
      console.log(pos)
    }, 2000)
  }, [])

  return (
    <a.group>
      <Bar key={0} locale={pos[0]} height={1} />
      <Bar key={1} locale={pos[1]} height={2} />
      <Bar key={2} locale={pos[2]} height={3} />
      <Bar key={3} locale={pos[3]} height={4} />
      {/* <Bar key={4} locale={pos[4]} height={5} />
      <Bar key={5} locale={pos[5]} height={6} /> */}
    </a.group>
  )
}

export default Bars
