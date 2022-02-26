import React from 'react'
import Committee from '../../components/Committee'
import Socials from '../../components/shared/Socials'

const AboutUs = () => {
  return (
    <div className="h-[80] sm:h-screen flex flex-col 2xl:flex-row">
      <div className="mb-16 2xl:w-2/5">
        <div className="flex flex-col 2xl:flex-row">
          <h1 className="flex-none header-font pr-3">Come meet</h1>
          <h1 className="flex-none header-font header-underline">Our Team</h1>
        </div>
        <p className="text-font mt-12 2xl:w-5/6">
          Nulla nec nibh dapibus, placerat leo nec, mattis eros. Etiam ac purus
          in nisl lacinia commodo eu quis leo. Morbi accumsan ligula risus, vel
          scelerisque lorem vulputate ac. Nulla nec nibh dapibus, placerat leo
          nec, mattis eros. Etiam ac purus in nisl lacinia commodo eu quis leo.
          Morbi accumsan ligula risus, vel scelerisque lorem vulputate ac.
        </p>
        <p className="text-font mt-8 2xl:w-5/6">
          Scroll through our committee members and hover over each to get to
          know them better!
        </p>
        <p className="text-font mt-8 2xl:w-5/6">
          Come talk to us on Discord, Facebook or checkout our UMSU page!
        </p>
        <div className="mt-8">
          <Socials />
        </div>
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
