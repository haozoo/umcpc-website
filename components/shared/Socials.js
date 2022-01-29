import Image from 'next/image'
import React from 'react'

function Socials() {
  return (
    <div className="flex gap-2">
      <a href="https://discord.gg/9fKA5cfg2N">
        <div className="social-icon bg-[#5865F2]">
          <div className="h-6 w-8 relative">
            <Image
              src="/discord-white.svg"
              alt="Discord Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
      <a href="https://www.facebook.com/umcpc/">
        <div className="social-icon bg-[#1778F2]">
          <div className="h-8 w-8 mb-1 relative">
            <Image
              src="/facebook-white.svg"
              alt="Facebook Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
      <a href="https://umsu.unimelb.edu.au/clubs/competitive-programming-club/">
        <div className="social-icon bg-[#68217C]">
          <div className="h-8 w-7 relative">
            <Image
              src="/umsu.png"
              alt="UMSU Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Socials
