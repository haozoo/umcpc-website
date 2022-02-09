import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSpring, animated } from 'react-spring'

const Header = () => {
  const styles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '1500' },
  })

  return (
    <animated.div
      className="grid grid-cols-2 md:grid-cols-8 mb-24"
      style={styles}
    >
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
        <div className="invisible md:visible flex flex-row items-center">
          <Link href="/about-us" passHref>
            <button className="header-btn">About Us</button>
          </Link>
          <Link href="/events" passHref>
            <button className="header-btn">Events</button>
          </Link>
          <Link href="/resources" passHref>
            <button className="header-btn">Resources</button>
          </Link>
          <a className="rounded-btn ml-4" href="http://shorturl.at/lDOX1">
            Join us
          </a>
        </div>
      </div>
    </animated.div>
  )
}

export default Header
