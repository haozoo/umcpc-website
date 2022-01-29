import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-8 mb-24">
      <div class="col-span-1 shrink-0">
        <Link href="/">
          <button>
            <img class="h-14 w-14" src="/club-logo.svg" alt="UMCPC Logo" />
            <p class="font-raleway font-bold text-white">umcpc.</p>
          </button>
        </Link>
      </div>
      <div class="col-span-1 md:col-span-7 md:grid md:justify-items-end">
        {/* <div class="grid justify-items-end md:invisible col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 bg-white"
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
        <div class="invisible md:visible flex flex-row items-center">
          <Link href="about-us">
            <button class="header-btn">About Us</button>
          </Link>
          <Link href="events">
            <button class="header-btn">Events</button>
          </Link>
          <Link href="resources">
            <button class="header-btn">Resources</button>
          </Link>
          <a class="rounded-btn ml-4" href="http://shorturl.at/lDOX1">
            Join us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
