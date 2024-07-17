import bgPatterHowWeWork from '../images/bg-pattern-how-we-work-mobile.svg'
import bgPatterHowWeWorkDesk from '../images/bg-pattern-how-we-work-desktop.svg'
const OurWork = () => {
    return (
        <>
            
      <section className='our-work relative z-10 bg-dark-violet my-28 mx-5 md:mx-10 lg:mx-48 overflow-hidden'>
        <img src={bgPatterHowWeWork} alt="" className='absolute block md:hidden top-0 right-0 -z-10 md:h-4/5 ' />
        <img src={bgPatterHowWeWorkDesk} alt="" className='absolute hidden md:block top-0 right-0 -z-10 ' />

        <div className='text-white py-20  flex flex-col items-center text-center gap-10 md:flex-row md:justify-between md:px-10 md:text-left md:py-16'>
          <h2 className='text-4xl md:w-3/5 lg:w-2/6'>Find out more about how we work</h2>
          <button className='border-2 rounded  py-2 px-4 uppercase  hover:bg-white hover:text-black transition-all ease-linear '>
            How we work
          </button>
        </div>

      </section>
        </>
    );
};

export default OurWork;