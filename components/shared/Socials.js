import React from 'react'

function Socials() {
  return (
    <div class="flex gap-2">
      <a href="https://discord.gg/9fKA5cfg2N">
        <div class="social-icon bg-[#5865F2]">
          <img class="h-6 w-6" src="/discord-white.svg" alt="Discord Logo" />
        </div>
      </a>
      <a href="https://www.facebook.com/umcpc/">
        <div class="social-icon bg-[#1778F2]">
          <img
            class="h-7 w-7 mb-1"
            src="/facebook-white.svg"
            alt="Facebook Logo"
          />
        </div>
      </a>
      <a href="https://umsu.unimelb.edu.au/clubs/competitive-programming-club/">
        <div class="social-icon bg-[#68217C]">
          <img class="h-6 w-6" src="/umsu.png" alt="UMSU Logo" />
        </div>
      </a>
    </div>
  )
}

export default Socials
