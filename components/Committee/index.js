import React, { useEffect, useState } from 'react'
import Member from './Member'

const EXECUTIVES = [
  {
    id: 1,
    name: 'Michael Zhao',
    title: 'President',
    img: '',
    text: "Hi I'm Michael and I love F1!",
  },
  {
    id: 2,
    name: "Jonothan El'Khoury",
    title: 'Vice President',
    img: '',
    text: "Hey! I'm Jono and I really like League of Legends",
  },
  {
    id: 3,
    name: 'Hao Xu',
    title: 'Treasurer',
    img: '',
    text: 'Hi guys, I like ...',
  },
  {
    id: 4,
    name: 'Kyla Canares',
    title: 'Secretary',
    img: '',
    text: 'Hi guys, I like ...',
  },
]

const COMMITTEE = [
  {
    id: 1,
    name: 'Kahsheng Lee',
    title: 'Communications Officer',
    img: '',
    text: 'Hi guys, I like ...',
  },
  {
    id: 2,
    name: 'Quang Ong',
    title: 'Committee Member',
    img: '',
    text: 'Hi guys, I like ...',
  },
  {
    id: 3,
    name: 'Risa Pais',
    title: 'Committee Member',
    img: 'Hi guys, I like ...',
  },
  {
    id: 4,
    name: 'Tugsgerel L.',
    title: 'Committee Member',
    img: '',
    text: 'Hi guys, I like ...',
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
      <div className="pb-16">
        <div className="sticky top-0 z-40 bg-gradient-to-b from-club-blue-900 pb-36 -mb-36" />
        <div>
          <h1 className="sticky top-0 z-50 subheader-font text-center mb-16">
            Executive Committee
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
            {executives.map((mem) => {
              return (
                <Member
                  key={mem.id}
                  name={mem.name}
                  title={mem.title}
                  img={mem.title}
                  text={mem.text}
                />
              )
            })}
          </div>
        </div>
        <div className="pb-32">
          <h1 className="subheader-font sticky top-0 z-50 text-center pb-16">
            General Committee
          </h1>
          <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 justify-items-center">
            {committee.map((mem) => {
              return (
                <Member
                  key={mem.id}
                  name={mem.name}
                  title={mem.title}
                  img={mem.title}
                  text={mem.text}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Committee
