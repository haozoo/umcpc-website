import React, { useEffect, useState } from 'react'
import Member from './Member'

const EXECUTIVES = [
  {
    name: 'Michael Zhao',
    title: 'President',
    img: '',
  },
  {
    name: "Jono El'Khoury",
    title: 'Vice President',
    img: '',
  },
  {
    name: 'Hao Xu',
    title: 'Treasurer',
    img: '',
  },
  {
    name: 'Kyla Canares',
    title: 'Secretary',
    img: '',
  },
]

const COMMITTEE = [
  {
    name: 'Kahsheng Lee',
    title: 'Communications Officer',
    img: '',
  },
  {
    name: 'Quang Ong',
    title: 'Committee Member',
    img: '',
  },
  {
    name: 'Risa Pais',
    title: 'Committee Member',
    img: '',
  },
  {
    name: 'Tugsgerel L.',
    title: 'Committee Member',
    img: '',
  },
]

const Committee = () => {
  const [executives, setExecutives] = useState([{}])
  const [committee, setCommittee] = useState([{}])

  useEffect(() => {
    setExecutives(EXECUTIVES)
    setCommittee(COMMITTEE)
  }, [])

  return (
    <>
      <div class="mb-16">
        <h1 class="subheader-font mb-16 text-center">Executive Committee</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
          {executives.map((mem) => {
            return <Member name={mem.name} title={mem.title} img={mem.title} />
          })}
        </div>
      </div>
      <div class="mb-16">
        <h1 class="subheader-font mb-16">General Committee</h1>
        <div class="grid grid-cols-1 lg:grid-cols-4 justify-items-center">
          {committee.map((mem) => {
            return <Member name={mem.name} title={mem.title} img={mem.title} />
          })}
        </div>
      </div>
    </>
  )
}

export default Committee
