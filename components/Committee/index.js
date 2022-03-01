import React, { useEffect, useState } from 'react'
import { COMMITTEE, EXECUTIVES } from '../../public/profiles/profiles'
import Member from './Member'

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
        <div className="sticky top-0 z-30 bg-gradient-to-b from-club-blue-900 pb-36 -mb-36" />
        <div>
          <h1 className="sticky top-0 z-40 subheader-font text-center mb-8 sm:mb-16">
            Executive Committee
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 justify-items-center px-12">
            {executives.map((mem) => {
              return (
                <Member
                  key={mem.id}
                  name={mem.name}
                  title={mem.title}
                  img={mem.img}
                  text={mem.text}
                />
              )
            })}
          </div>
        </div>
        <div className="">
          <h1 className="subheader-font sticky top-0 z-50 text-center pb-16">
            General Committee
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 justify-items-center">
            {committee.map((mem) => {
              return (
                <Member
                  key={mem.id}
                  name={mem.name}
                  title={mem.title}
                  img={mem.img}
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
