import React from 'react'

const Header = () => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-8">
      <div class="flex flex-col col-span-1 shrink-0">
        <img class="h-14 w-14" src="/club-logo.svg" alt="UMCPC Logo" />
        <p class="font-raleway font-bold text-white">umcpc.</p>
      </div>
      <div class="invisible h-0 md:visible md:col-span-7 md:grid md:justify-items-end">
        <div class="flex flex-row items-center">
          <button class="header-btn">About Us</button>
          <button class="header-btn">Events</button>
          <button class="header-btn">Resources</button>
          <button class="rounded-btn">Join us</button>
        </div>
      </div>
    </div>
  )
}

export default Header
