/* eslint-disable react/prop-types */
import close from '../images/icon-close-black.svg'
const MobileHeader = ({setMenuBar,menuBar}) => {

    console.log("menuBar",menuBar);
    const removeMenubar = ()=>{
        setMenuBar(false)
    }
    return (

        <div className="fixed top-0 left-0 bg-slate-800 bg-opacity-70 h-full w-full lg:hidden z-40  ">
            <nav className={`fixed top-0 bg-white h-full w-3/5 lg:hidden z-50 shadow pt-10 pl-10 `}>
                <img src={close} alt="" className='z-50 w-6 cursor-pointer pb-16' onClick={removeMenubar}/>
                <ul className="h-full w-full flex flex-col gap-4 font-bold  justify-start ">
                  <li className="cursor-pointer w-fit flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Collection</li>
                  <li className="cursor-pointer w-fit  flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Men</li>
                  <li className="cursor-pointer w-fit  flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Wemen</li>
                  <li className="cursor-pointer w-fit  flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">About</li>
                  <li className="cursor-pointer w-fit  flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Contact</li>
                </ul>
              </nav>
        </div>
    );
};

export default MobileHeader;