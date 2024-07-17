import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import logo from '../images/logo.svg'
import bgPatterFooterMobile from '../images/bg-pattern-footer-mobile.svg'
import bgPatterFooterDesk from '../images/bg-pattern-footer-desktop.svg'
const Footer = () => {
    return (
        <>
            <footer className='text-center relative z-10 py-20 md:py-0 md:pb-10  bg-very-light-gray'>
        <img src={bgPatterFooterMobile} className='absolute block md:hidden -z-10 top-0' alt="" />
        <img src={bgPatterFooterDesk} className='absolute block md:block -z-10 top-0' alt="" />
        <div className='border-b-2  mx-5  md md:flex md:mx-10 lg:mx-48 justify-between items-center'>
          <img src={logo} alt="" className='mx-auto md:mx-0 md:h-6' />
          <ul className='flex py-10 items-center justify-center gap-4 text-2xl'>
            <li><FaFacebookSquare /></li>
            <li><FaTwitter /></li>
            <li><FaPinterest /></li>
            <li><FaInstagram /></li>
          </ul>
        </div>

        <div className="footer-links text-center grid grid-cols-1 md:grid-cols-4 md:text-left md:mx-10 lg:mx-48  ">
          <div>
            <h3 className='text-xl uppercase  text-slate-500 py-8'>Our company</h3>
            <ul className='text-xl font-bold uppercase flex flex-col gap-3'>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Why Insure?</a></li>
              <li><a href="#">View plans</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl uppercase  text-slate-500 py-8'>Help me</h3>
            <ul className='text-xl font-bold uppercase flex flex-col gap-3'>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl uppercase  text-slate-500 py-8'>Contact</h3>
            <ul className='text-xl font-bold uppercase flex flex-col gap-3'>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Live chat</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl uppercase  text-slate-500 py-8'>Others</h3>
            <ul className='text-xl font-bold uppercase flex flex-col gap-3'>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </div>

      </footer>
        </>
    );
};

export default Footer;