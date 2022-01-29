import React, { useEffect, useState } from 'react'
import Member from './Member'

const EXECUTIVES = [
  { id: 1, name: 'Michael Zhao', title: 'President', img: '' },
  { id: 2, name: "Jono El'Khoury", title: 'Vice President', img: '' },
  { id: 3, name: 'Hao Xu', title: 'Treasurer', img: '' },
  { id: 4, name: 'Kyla Canares', title: 'Secretary', img: '' },
]

const COMMITTEE = [
  { id: 1, name: 'Kahsheng Lee', title: 'Communications Officer', img: '' },
  { id: 2, name: 'Quang Ong', title: 'Committee Member', img: '' },
  { id: 3, name: 'Risa Pais', title: 'Committee Member', img: '' },
  { id: 4, name: 'Tugsgerel L.', title: 'Committee Member', img: '' },
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
      <div className="mb-16">
        <h1 className="subheader-font mb-16 text-center">
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
              />
            )
          })}
        </div>
      </div>
      <div className="mb-16">
        <h1 className="subheader-font mb-16">General Committee</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center">
          {committee.map((mem) => {
            return (
              <Member
                key={mem.id}
                name={mem.name}
                title={mem.title}
                img={mem.title}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Committee
