
import headerBgIcon from './assets/images/bg-header-mobile.svg'
import data from '../data.json'
import removeIcon from './assets/images/icon-remove.svg'
import { useEffect } from 'react'
import JobDetailsCart from './components/JobDetailsCart'
import { useDispatch,useSelector } from 'react-redux'
import { setJobList } from './store/reducers/jobListReducer'
function App() {

  
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setJobList(data));
  }, [data, dispatch]); 

  const jobList = useSelector(state => state.jobList.jobList); 
  console.log("job list in app jx",jobList);
  

  return (
    <div>
      <header className='w-full bg-desaturated-dark-cyan'>
        <img src={headerBgIcon} alt="header-icon" role='headerIcon' className='w-full' />
      </header>
      <main className='bg-light-grayish-cyan-background h-screen px-10'>

        <div className="job-search bg-white rounded-lg shadow-lg -translate-y-1/2 flex" >
          <div className="job-search-card px-6 py-4 max-h-32  w-11/12 grid grid-cols-2 gap-4 overflow-y-auto">
            <div className='list-none bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold rounded flex justify-between w-fit '>
              <li className='px-4 py-1'>Frontend</li>
              <button className='bg-desaturated-dark-cyan rounded-e h-full px-2'><img src={removeIcon} alt="remove icon" /></button>
            </div>
          </div>
          <div className="clear-search-card  px-4 flex items-center rounded-e-lg ">
            <button className='font-extrabold text-slate-400'>Clear</button>
          </div>
        </div>

        <div className='job-details-role'>
          <JobDetailsCart />
        </div>

      </main>
    </div>
  )
}

export default App
