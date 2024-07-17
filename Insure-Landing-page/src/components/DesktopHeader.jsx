import hamburgerMenu from '../images/icon-hamburger.svg'
import logo from '../images/logo.svg'
const DesktopHeader = () => {
    return (
        <>
            <header className=' flex items-center justify-between p-6 md:p-0 md:py-6 md:mx-10 lg:mx-48 z-50'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className='md:hidden block'>
          <img src={hamburgerMenu} className='cursor-pointer' alt="" onClick={navOpenHandler} />
        </div>
        <div className='menu-list hidden md:block '>
          <ul className=' flex items-center gap-5'>
            <ll><a href="">How we work</a></ll>
            <ll><a href="">Blog</a></ll>
            <ll><a href="">Account</a></ll>
            <ll className="border-2 rounded  py-2 px-6 uppercase "><a href="">View plans</a></ll>
          </ul>
        </div>
      </header>
        </>
    );
};

export default DesktopHeader;