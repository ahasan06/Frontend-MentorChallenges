

import bgPatterLeftMobile from '../images/bg-pattern-intro-left-mobile.svg'
import bgPatterRightMobile from '../images/bg-pattern-intro-right-mobile.svg'
import bgPatternLeftDesk from '../images/bg-pattern-intro-left-desktop.svg'
import bgPatternRightDesk from '../images/bg-pattern-intro-right-desktop.svg'
import bgImage from '../assets/image-intro-mobile.jpg'

const ShowcCase = () => {
    return (
        <>
            <section className='showcase relative bg-dark-violet z-10'>
                <div className='desktop-armaments hidden md:block'>
                    <img src={bgPatternLeftDesk} alt="" className='absolute left-0 top-52' />
                    <img src={bgPatternRightDesk} alt="" className='absolute w-72 right-0 top-0 z-30' />
                </div>

                <div className="showcase-container relative md:mx-10 lg:mx-48">
                    <div className='md:absolute md:z-20 right-0 md:top-1/4'>
                        <img src={bgImage} alt="mobile section" className='w-full ' />
                    </div>

                    <div className='showcase-inner relative px-10 py-20  z-10 md:px-0'>
                        <img src={bgPatterLeftMobile} alt="" className='absolute -z-10 top-0 left-0 md:hidden' />
                        <div className='showcase-body text-white text-center md:text-left md:w-1/2'>
                            <div className='hidden md:block md:border-t-2 w-1/3 pb-8'></div>
                            <h1 className='text-5xl md:text-4xl lg:text-5xl '> Humanizing your insurance.</h1>
                            <p className=' mt-5 mb-10 md:text-sm md:w-10/12'>
                                Get your life insurance coverage easier and faster. We blend our expertise
                                and technology to help you find the plan that’s right for you. Ensure you
                                and your loved ones are protected.</p>
                            <div className="showcase-btn">
                                <button className='border-2 rounded  py-2 px-6 uppercase hover:bg-white hover:text-black transition-all ease-linear'>View plans</button>
                            </div>
                        </div>
                        <img src={bgPatterRightMobile} alt="" className='absolute  top-2/3 right-0 md:hidden' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShowcCase;