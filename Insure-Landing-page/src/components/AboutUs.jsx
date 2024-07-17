import snapyProcess from '../images/icon-snappy-process.svg'
import afortablePrice from '../images/icon-affordable-prices.svg'
import peopleFirst from '../images/icon-people-first.svg'

const AboutUs = () => {
    return (
        <>
              <section className='grid-items pt-44 md:mx-10 lg:mx-48'>

<div className='flex flex-col items-center pb-20 gap-10 md:items-start'>
  <div className='w-1/3 bg-slate-400 h-0.5 md:w-1/12'></div>
  <h2 className='text-5xl '>We’re different</h2>
</div>

<div className='cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20'>

  <div className="card text-center px-10 md:px-0 lg:px-0 flex flex-col gap-5 md:text-left lg:text-left ">
    <img src={snapyProcess} alt="" className='mx-auto md:ml-0 lg:ml-0' />
    <h3 className='text-2xl'>Snappy Process</h3>
    <p> Our application process can be completed in minutes, not hours. Don’t get
      stuck filling in tedious forms.</p>
  </div>

  <div className="card text-center px-10 md:px-0  lg:px-0 flex flex-col gap-5 md:text-left lg:text-left ">
    <img src={afortablePrice} alt="" className='mx-auto md:ml-0 lg:ml-0' />
    <h3 className='text-2xl'>Affordable Prices</h3>
    <p> We don’t want you worrying about high monthly costs. Our prices may be low,
      but we still offer the best coverage possible.</p>
  </div>

  <div className="card text-center px-10 md:px-0  lg:px-0  flex flex-col gap-5 md:text-left lg:text-left ">
    <img src={peopleFirst} alt="" className='mx-auto md:ml-0 lg:ml-0' />
    <h3 className='text-2xl'>People First</h3>
    <p> Our plans aren’t full of conditions and clauses to prevent payouts. We make
      sure you’re covered when you need it.</p>
  </div>

</div>

</section>

        </>
    );
};

export default AboutUs;