import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 mb-24">
      <div className="col-span-1 shrink-0">
        <Link href="/" passHref>
          <button>
            <div className="h-14 w-14 relative">
              <Image
                src="/club-logo.svg"
                alt="UMCPC Logo"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
              />
            </div>
            <p className="font-raleway font-bold text-white">umcpc.</p>
          </button>
        </Link>
      </div>
      <div className="col-span-1 md:col-span-7 md:grid md:justify-items-end">
        {/* <div className="grid justify-items-end md:invisible col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 bg-white"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div> */}
        <div className="invisible md:visible flex flex-row items-center">
          <Link href="about-us" passHref>
            <button className="header-btn">About Us</button>
          </Link>
          <Link href="events" passHref>
            <button className="header-btn">Events</button>
          </Link>
          <Link href="resources" passHref>
            <button className="header-btn">Resources</button>
          </Link>
          <a className="rounded-btn ml-4" href="http://shorturl.at/lDOX1">
            Join us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
