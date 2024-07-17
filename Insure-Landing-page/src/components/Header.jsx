import hamburgerMenu from '../images/icon-hamburger.svg'
import logo from '../images/logo.svg'
import { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';


const Header = () => {

  const [navOpen, setNavOpen] = useState(false)
  const navOpenHandler = () => {
    setNavOpen(true)
  }
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>

      {
        navOpen ? <MobileHeader  setNavOpen={setNavOpen}/> : (
          <header className='h-24 flex items-center justify-between p-6 md:p-0  md:mx-10 lg:mx-48 z-50'>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className='md:hidden block'>
              <img src={hamburgerMenu} className='cursor-pointer' alt="" onClick={navOpenHandler} />
            </div>
            <div className='menu-list hidden md:block h-full'>
              <ul className=' flex items-center gap-5 h-full uppercase'>
                <ll className="flex items-center h-full border-b border-b-transparent   hover:border-b-orange-500 hover:text-orange-500 transition-all ease-linear "><a href="">How we work</a></ll>
                <ll className="flex items-center h-full border-b border-b-transparent   hover:border-b-orange-500 hover:text-orange-500 transition-all ease-linear "><a href="">Blog</a></ll>
                <ll className="flex items-center h-full border-b border-b-transparent   hover:border-b-orange-500 hover:text-orange-500 transition-all ease-linear "><a href="">Account</a></ll>
                <ll className="border-2 rounded  py-2 px-6 uppercase  hover:bg-black hover:text-white transition-all ease-linear "><a href="">View plans</a></ll>
              </ul>
            </div>
          </header>
        )
      }



    </>
  );
};

export default Header;