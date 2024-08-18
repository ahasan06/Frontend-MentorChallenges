import logo_light from '../assets/images/logo-light.svg'
import logo from '../assets/images/logo-bookmark.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twiteer from '../assets/images/icon-twitter.svg'

function Nav() {
  return (
    <div>
       <header className='flex items-center justify-between p-8'>
      <div>
        <img src={logo} alt="" />
      </div>

        <nav className='hidden'>
          <ul>
            <li><a href="">Feature</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">login</a></li>
          </ul>

          <ul>
            <li><a href="/facebook"><img src={facebook} alt="facebook" /></a></li>
            <li><a href="/twiteer"><img src={twiteer} alt="twiteer" /></a></li>
          </ul>
        </nav>

        <button>
          <img src={hamburger} alt="menu" />
        </button>
      </header>
    </div>
  )
}

export default Nav
