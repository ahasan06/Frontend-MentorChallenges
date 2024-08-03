import headerBgIcon from './assets/images/bg-header-mobile.svg';
import headerBgIconDesk from './assets/images/bg-header-desktop.svg';
import data from '../data.json';
import removeIcon from './assets/images/icon-remove.svg';
import { useEffect } from 'react';
import JobDetailsCart from './components/JobDetailsCart';
import { useDispatch, useSelector } from 'react-redux';
import { setJobList, clearSearchCart, removeRoleToSearchCart } from './store/reducers/jobListReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobList(data));
  }, [data, dispatch]);

  const jobList = useSelector((state) => state.jobList.jobList);
  const searchCart = useSelector((state) => state.jobList.searchCart);



  const clearCart = () => {
    dispatch(clearSearchCart());
  };

  const removeRoleFromCart = (role) => {
    console.log("remove role", role);
    dispatch(removeRoleToSearchCart(role))
  };

  const filteredJobList = searchCart.length
    ? jobList.filter(job =>
      searchCart.every(role =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(role)
        
      )
    )
    : jobList;

  return (
    <div className='bg-light-grayish-cyan-background pb-20  h-screen'>
      <header className='w-full bg-desaturated-dark-cyan'>
        <img src={headerBgIcon} alt='header-icon' role='headerIcon' className='w-full block md:hidden' />
        <img src={headerBgIconDesk} alt='header-icon' role='headerIcon' className='w-full hidden md:block' />
      </header>
      <main className='h-full px-6 bg-light-grayish-cyan-background'>
        <div className="container mx-auto">
        {searchCart.length > 0 && (
          <div className='job-search bg-white rounded-lg shadow-lg -translate-y-1/2 flex justify-between lg:w-9/12   lg:mx-auto'>
            <div className='job-search-card pl-4 py-4 max-h-32 w-11/12 lg:w-8/12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:flex gap-4 overflow-y-auto overflow-x-auto custom-scrollbar'>
              {searchCart.map((role, index) => (
                <div
                  key={index}
                  className='list-none bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold rounded flex justify-between w-fit'
                >
                  <li className='px-4 py-1'>{role}</li>
                  <button
                    onClick={() => removeRoleFromCart(role)}
                    className='bg-desaturated-dark-cyan rounded-e h-full w-6 flex justify-center items-center'
                  >
                    <img src={removeIcon} alt='remove icon' />
                  </button>
                </div>
              ))}
            </div>
            <div className='clear-search-card px-2 md:px-6 lg:px-10 flex items-center rounded-e-lg'>
              <button onClick={clearCart} className='font-extrabold text-slate-400'>
                Clear
              </button>
            </div>
          </div>
        )}

        <div className='job-details-role lg:w-9/12  lg:mx-auto'>
          {filteredJobList?.map((jobLists) => (
            <JobDetailsCart jobLists={jobLists} key={jobLists.id} />
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
