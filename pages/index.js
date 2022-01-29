import Hero3JS from '../components/Hero3JS'
import Socials from '../components/shared/Socials'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 h-screen">
        <div className="col-span-2">
          <h2 className="subtitle-font pl-1">The University of Melbourne</h2>
          <h1 className="header-font">
            Competitive <br /> Programming
          </h1>
          <h1 className="header-font header-underline">Club</h1>
          <p className="text-font pr-2 mt-8 text-left">
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
        </div>
        <div className="invisible lg:visible lg:col-span-6 ml-0 lg:ml-40">
          <Hero3JS></Hero3JS>
        </div>
      </div>
    </>
  )
}
