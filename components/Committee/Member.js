import Image from 'next/image'
import React from 'react'

const Member = ({ name, title, img }) => {
  return (
    <div className="mb-16">
      <div className="mb-2">
        <Image
          src="/profile-tmp.jpg"
          width={160}
          height={160}
          alt="Committee member profile picture."
          className="h-36 w-36 rounded-full"
        />
      </div>
      <h2 className="text-white font-raleway font-bold text-lg text-center">
        {name}
      </h2>
      <h3 className="text-blue-200 font-raleway text-base text-center">
        {title ? title : 'Committee Member'}
      </h3>
    </div>
  )
}

export default Member
