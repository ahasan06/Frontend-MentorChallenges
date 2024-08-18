
import chrome from '../assets/images/logo-chrome.svg'
import fireFox from '../assets/images/logo-firefox.svg'
import Opera from '../assets/images/logo-opera.svg'
import dots from '../assets/images/bg-dots.svg'

function Download() {
    return (
        <>
            <section className=" max-w-7xl mx-auto px-8 mb-20 md:py-20">
                
                <article className="flex flex-col text-center md:w-1/2 md:mx-auto">
                    <h2 className="text-2xl md:text-3xl pb-6"> Download the extension</h2>
                    <p>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve
                        got a favourite you’d like us to prioritize.</p>
                </article>

                <article className='md:w-3/4 md:mx-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>

                    <div className="download__card flex flex-col items-center shadow-xl rounded-xl mt-10 py-6 w-fit mx-auto">
                        <img src={chrome} alt="chrome" className='pb-8' />
                        <h2 className='text-xl'>Add to Chrome</h2>
                        <p className='text-slate-500'>Minimum version 62</p>
                        <img src={dots} alt="dots" className='py-8' />
                        <button className='bg-soft-blue text-white rounded shadow-lg py-2 px-6 '>Add & Install Extension</button>
                    </div>


                    <div className="download__card flex flex-col items-center shadow-xl rounded-xl mt-10 py-6 w-fit mx-auto lg:translate-y-10">
                        <img src={fireFox} alt="chrome" className='pb-8' />
                        <h2 className='text-xl'>Add to Firefox</h2>
                        <p className='text-slate-500'>Minimum version 55</p>
                        <img src={dots} alt="dots" className='py-8' />
                        <button className='bg-soft-blue text-white rounded shadow-lg py-2 px-6 '>Add & Install Extension</button>
                    </div>

                    <div className="download__card flex flex-col items-center shadow-xl rounded-xl mt-10 py-6 w-fit mx-auto lg:translate-y-20">
                        <img src={Opera} alt="chrome" className='pb-8' />
                        <h2 className='text-xl'>Add to Opera</h2>
                        <p className='text-slate-500'>Minimum version 62</p>
                        <img src={dots} alt="dots" className='py-8' />
                        <button className='bg-soft-blue text-white rounded shadow-lg py-2 px-6 '>Add & Install Extension</button>
                    </div>

                </article>

            </section>
        </>
    )
}

export default Download
