import Image from 'next/image'
import React, { useEffect } from 'react'
import { PROFILE_PATH } from '../../public/profiles/profiles'

const Member = ({ name, title, img, text }) => {
  return (
    <div className="flex flex-col items-center h-fit mb-8 sm:mb-16">
      <div className="relative mb-2 group">
        <div className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-full">
          <Image
            className="rounded-full"
            src={img === '' ? '/profiles/tmp-profile.jpeg' : PROFILE_PATH + img}
            alt="Committee member profile picture."
            layout="fill"
            objectFit="cover"
          />
        </div>
        {text && (
          <div className="member-tooltip group-hover:scale-100">{text}</div>
        )}
      </div>
      <h2 className="text-white font-raleway font-bold text-base sm:text-lg text-center">
        {name}
      </h2>
      <h3 className="text-blue-200 font-raleway text-sm sm:text-base text-center">
        {title ? title : 'Committee Member'}
      </h3>
    </div>
  )
}

export default Member
