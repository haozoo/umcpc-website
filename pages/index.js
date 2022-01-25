import Hero3JS from '../components/Hero3JS'

export default function Home() {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-8 gap-4 text-white mt-16">
        <div class="col-span-2">
          <h2 class="subheader-font">The University of Melbourne</h2>
          <h1 class="header-font">
            Competitive <br /> Programming Club
          </h1>
          <div class="bg-club-blue-500 h-1.5 my-2 w-36"></div>
          <p class="mt-8 w-full md:w-72 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            nibh dapibus, placerat leo nec, mattis eros. Etiam ac purus in nisl
            lacinia commodo eu quis leo. Morbi accumsan ligula risus, vel
            scelerisque lorem vulputate ac.
          </p>
        </div>
        <div class="invisible md:visible md:col-span-6 h-[40rem]">
          <Hero3JS></Hero3JS>
        </div>
      </div>
    </>
  )
}
