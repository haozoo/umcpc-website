import React from 'react'
import Committee from '../../components/Committee'

const AboutUs = () => {
  return (
    <div class="md:mx-40 xl:mx-80 text-center">
      <div class="mb-32">
        <h1 class="header-font mb-2 text-center">Meet Our Team!</h1>
        <div class="bg-club-blue-600 w-full h-2 mb-4" />
        <p class="text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          nibh dapibus, placerat leo nec, mattis eros. Etiam ac purus in nisl
          lacinia commodo eu quis leo. Morbi accumsan ligula risus, vel
          scelerisque lorem vulputate ac.
        </p>
      </div>
      <Committee />
    </div>
  )
}

export default AboutUs
