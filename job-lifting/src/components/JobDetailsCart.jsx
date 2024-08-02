import photoSnap from '../assets/images/photosnap.svg'
function JobDetailsCart() {
  return (
    <div>
       <div className="job-details pt-10">
          <div className="card bg-white rounded-lg shadow-xl px-6 relative">
            <div className=' bg-desaturated-dark-cyan w-2 h-full absolute left-0 rounded-l-lg'></div>
            <img src={photoSnap} alt="card-icon" className=' w-14 h-fit -translate-y-1/2'/>
            <div className="card-details">
              <div className="company-details flex items-center gap-4 pb-4">
                <h3 className='compnay font-bold text-desaturated-dark-cyan'>Photosnap</h3>
                <div className="featured flex items-center gap-2">
                  <p className='uppercase bg-desaturated-dark-cyan inline-block text-white text-sm font-semibold pt-1 px-2 rounded-xl '>New!</p>
                  <p className='uppercase bg-very-dark-grayish-cyan inline-block text-white text-sm font-semibold pt-1 px-2 rounded-xl '>Featured</p>
                </div>
              </div>
              <div className="job-title">
                <h1 className='text-very-dark-grayish-cyan font-extrabold text'>Senior frontend Developer</h1>
              </div>
              <div className="job-details py-2 flex gap-4 text-slate-400 font-semibold">
                  <p>1d ago</p>
                  <li>Full time</li>
                  <li>USA only</li>
              </div>
            <hr />
            </div>
            <div className="card-roles grid grid-cols-3 py-6 gap-4">
              <button className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'>
               Full Stack
              </button>
              <button className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'>
               FullStack
              </button>
              <button className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'>
               FullStack
              </button>
              <button className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'>
               FullStack
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default JobDetailsCart
