/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addRoleToSearchCart } from '../store/reducers/jobListReducer';

function JobDetailsCart({ jobLists }) {
  const dispatch = useDispatch();



  return (
    <div>
      <div className="job-details pt-14">
        <div className="card bg-white rounded-lg shadow-xl px-6 relative lg:flex gap-5 ">
          {jobLists.featured&&(<div className='bg-desaturated-dark-cyan w-2 h-full absolute left-0 rounded-l-lg'></div>)}
          <img src={jobLists.logo} alt="card-icon" className='w-14 h-fit -translate-y-1/2 lg:translate-y-3/4 ' />
          <div className="card-details lg:flex flex-col flex-1 lg:py-4 ">
            <div className="company-details flex items-center gap-4 pb-4">
              <h3 className='company font-bold text-desaturated-dark-cyan text-lg'>{jobLists.company}</h3>
              <div className="featured flex items-center gap-2">
                {jobLists.new && (
                  <p className='uppercase bg-desaturated-dark-cyan inline-block text-white text-sm font-semibold pt-1 px-2 rounded-xl'>
                    New!
                  </p>
                )}
                {jobLists.featured && (
                  <p className='uppercase bg-very-dark-grayish-cyan inline-block text-white text-sm font-semibold pt-1 px-2 rounded-xl'>
                    Featured
                  </p>
                )}
              </div>
            </div>
            <div className="job-title">
              <h1 className='text-very-dark-grayish-cyan font-extrabold text-xl'>{jobLists.position}</h1>
            </div>
            <div className="job-details text-lg py-2 flex gap-4 text-slate-400 font-semibold">
              <p>{jobLists.postedAt}</p>
              <li>{jobLists.contract}</li>
              <li>{jobLists.location}</li>
            </div>
            <hr className='lg:hidden'/>
          </div>
          <div className="card-roles grid grid-cols-3 py-6 gap-4 text-lg  lg:flex items-center flex-1 justify-end">
            <button
              className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'
              onClick={() => dispatch(addRoleToSearchCart(jobLists?.role))}
            >
              {jobLists?.role}
            </button>
            <button
              className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'
              onClick={() => dispatch(addRoleToSearchCart(jobLists?.level))}
            >
              {jobLists?.level}
            </button>
            {jobLists.languages.map((language, index) => (
              <button
                key={index}
                className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'
                onClick={() => dispatch(addRoleToSearchCart(language))}
              >
                {language}
              </button>
            ))}
            {jobLists.tools.map((tool, index) => (
              <button
                key={index}
                className='bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold pt-1 rounded'
                onClick={() => dispatch(addRoleToSearchCart(tool))}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsCart;
