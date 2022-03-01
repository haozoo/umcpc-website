import React from 'react'
import Committee from '../../components/Committee'
import Socials from '../../components/shared/Socials'

const AboutUs = () => {
  return (
    <div className="h-[80] sm:h-screen flex flex-col 2xl:flex-row">
      <div className="mb-16 2xl:w-2/5">
        <div className="flex flex-col 2xl:flex-row">
          <h1 className="flex-none header-font pr-3 z-20">Come meet</h1>
          <h1 className="flex-none header-font z-20 header-underline">
            our team
          </h1>
        </div>
        <p className="text-font mt-12 2xl:w-5/6">
          Our club is home to all of the University of Melbourne&apos;s
          competitive programming endeavours! We aim to impart a strong
          understanding of algorithms and data structures that are both fun and
          key to a successful future in the tech industry!
        </p>
        <p className="text-font mt-8 2xl:w-5/6">
          Come talk to us on <span className="highlighted-font">Discord</span>,{' '}
          <span className="highlighted-font">Facebook</span> or checkout our new{' '}
          <span className="highlighted-font">UMSU</span> page!
        </p>
        <div className="mt-8">
          <Socials />
        </div>
        <p className="text-font mt-8 2xl:w-5/6">
          Scroll through our committee members and hover over each to get to
          know them better!
        </p>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-scroll">
          <Committee />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
