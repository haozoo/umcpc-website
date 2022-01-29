import Hero3JS from '../components/Hero3JS'
import Socials from '../components/shared/Socials'

export default function Home() {
  return (
    <>
      <div class="grid grid-cols-1 lg:grid-cols-8 gap-4 h-screen">
        <div class="col-span-2">
          <h2 class="subtitle-font pl-1">The University of Melbourne</h2>
          <h1 class="header-font">
            Competitive <br /> Programming
          </h1>
          <h1 class="header-font header-underline">Club</h1>
          <p class="text-font pr-2 mt-8 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            nibh dapibus, placerat leo nec, mattis eros. Etiam ac purus in nisl
            lacinia commodo eu quis leo. Morbi accumsan ligula risus, vel
            scelerisque lorem vulputate ac.
          </p>
          <a
            class="flex mt-16 mb-4 w-48 bg-club-blue-400 shadow shadow-club-blue-500 rounded-full"
            href="http://shorturl.at/lDOX1"
          >
            <p class="btn-font py-2 pl-6 pr-3">Join the club!</p>
            <p class="btn-font py-2 w-0.5 bg-club-blue-500"></p>
            <p class="btn-font py-2 pl-3 pr-6">$0</p>
          </a>
          <Socials />
        </div>
        <div class="invisible lg:visible lg:col-span-6 ml-0 lg:ml-40">
          <Hero3JS></Hero3JS>
        </div>
      </div>
    </>
  )
}
