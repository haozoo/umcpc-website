import Hero3JS from '../components/Hero3JS'
import Socials from '../components/shared/Socials'
import { useSpring, animated } from 'react-spring'

export default function Home() {
  const fadeIn = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '1500' },
  })

  return (
    <div className="h-screen overflow-hidden relative z-0">
      <animated.div
        className="flex flex-col lg:w-1/5 z-50 absolute inset-0 "
        style={fadeIn}
      >
        <h2 className="subtitle-font pl-1">The University of Melbourne</h2>
        <h1 className="header-font">
          Competitive <br /> Programming
        </h1>
        <h1 className="header-font header-underline">Club</h1>
        <p className="text-font mt-8 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          nibh dapibus, placerat leo nec, mattis eros. Etiam ac purus in nisl
          lacinia commodo eu quis leo. Morbi accumsan ligula risus, vel
          scelerisque lorem vulputate ac.
        </p>
        <a
          className="flex mt-16 mb-4 w-48 bg-club-blue-400 shadow shadow-club-blue-500 rounded-full"
          href="http://shorturl.at/lDOX1"
        >
          <p className="btn-font py-2 pl-6 pr-3">Join the club!</p>
          <p className="btn-font py-2 w-0.5 bg-club-blue-500"></p>
          <p className="btn-font py-2 pl-3 pr-6">$0</p>
        </a>
        <Socials />
      </animated.div>
      <div className="h-4/5 invisible lg:visible">
        <Hero3JS></Hero3JS>
      </div>
    </div>
  )
}
