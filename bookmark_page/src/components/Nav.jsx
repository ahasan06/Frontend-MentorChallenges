import logo_light from '../assets/images/logo-light.svg';
import logo from '../assets/images/logo-bookmark.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import { useState } from 'react';

function Nav() {

  const [openMobNav, setOpenMobNav] = useState(false);

  const handleNav = () => {
    setOpenMobNav(prevState => !prevState);
  }

  return (
    <div>
      <header className='flex items-center justify-between p-10'>
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <nav className={`${openMobNav ? 'open' : 'md:block'} hidden`}>
          <div className='nav__menu'>
            <div className='flex items-center justify-between md:hidden'>
              <img src={logo_light} alt="Light Logo" />
              <button onClick={handleNav}>
                <img src={closeIcon} alt="Close Menu" />
              </button>
            </div>
            <ul className='nav__list md:flex items-center justify-center md:gap-6 uppercase'>
              <li className='hover:text-soft-red'><a href="#">Feature</a></li>
              <li className='hover:text-soft-red'><a href="#">Pricing</a></li>
              <li className='hover:text-soft-red'><a href="#">Contact</a></li>
              <li><a className='nav__btn' href="#">Login</a></li>
            </ul>
          </div>

          <ul className='nav_link md:hidden'>
            <li><a href="/facebook"><img src={facebook} alt="Facebook" /></a></li>
            <li><a href="/twitter"><img src={twitter} alt="Twitter" /></a></li>
          </ul>
        </nav>

        <button className='md:hidden' onClick={handleNav}>
          <img src={hamburger} alt="Menu" />
        </button>
      </header>
    </div>
  )
}

export default Nav;
