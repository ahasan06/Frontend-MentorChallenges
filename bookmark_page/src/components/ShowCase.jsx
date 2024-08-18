import hero from '../assets/images/illustration-hero.svg'

function ShowCase() {
  return (
    <section className='px-8 py-20 flex flex-col-reverse md:grid grid-cols-2 md:items-center lg:max-w-7xl lg:gap-16 mx-auto '>

      <article className='text-center md:text-start'>
        <h1 className='text-4xl my-7 lg:text-6xl '>  A Simple Bookmark Manager</h1>
        <p> A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.</p>

        <ul className='pt-10 flex items-center justify-center flex-wrap gap-4 md:justify-start'>
          <button className='bg-soft-blue text-white rounded shadow-lg py-2 px-6 '><a href="">Get it on Chrome</a></button>
          <button className='bg-slate-100 px-6 py-2 rounded shadow-lg'><a href="">Get it on Firefox</a></button>
        </ul>
      </article>

      <article className='relative'>
        <img src={hero} alt="hero" className='w-full' />
        <div className="hero__bg"></div>
      </article>

    </section>
  )
}

export default ShowCase
