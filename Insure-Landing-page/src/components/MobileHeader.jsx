/* eslint-disable react/prop-types */


import logo from '../images/logo.svg'
import { RxCross1 } from "react-icons/rx";
import bgPatternMobileNav from '../images/bg-pattern-mobile-nav.svg'
const MobileHeader = ({ setNavOpen }) => {

    const removeNavhandler = () => {
        setNavOpen(false)
    }

    return (
        <>
            <header className='md:hidden mobile-screen-nav flex flex-col items-center fixed top-0 w-full h-full z-50 bg-very-dark-violet'>
                <div className='flex bg-white w-full py-6 px-8 justify-between'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='md:hidden block'>
                        <RxCross1 className='cursor-pointer text-2xl' onClick={removeNavhandler} />

                    </div>

                </div>
                <div className='menu-list md:block text-white flex justify-center pt-24 '>
                    <ul className=' flex flex-col items-center gap-5 text-3xl uppercase'>
                        <ll className=" hover:text-slate-400 transition-all ease-linear "><a href="">How we work</a></ll>
                        <ll className=" hover:text-slate-400 transition-all ease-linear "><a href="">Blog</a></ll>
                        <ll className=" hover:text-slate-400 transition-all ease-linear "><a href="">Account</a></ll>
                        <ll className="border-2 rounded  py-2 px-6 uppercase  hover:bg-white hover:text-black transition-all ease-linear "><a href="">View plans</a></ll>
                    </ul>

                    <img src={bgPatternMobileNav} className='absolute bottom-0 w-full' alt="" />
                </div>
            </header>
        </>
    );
};

export default MobileHeader;