import Image from 'next/image'
import React from 'react'

const Member = ({ name, title, img, text }) => {
  return (
    <div className="relative h-72 mb-16">
      <div className="mb-2 group">
        <Image
          src="/tmp-profile.jpeg"
          width={208}
          height={208}
          alt="Committee member profile picture."
          className="rounded-full"
        />
        <div className="member-tooltip group-hover:scale-100">{text}</div>
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
