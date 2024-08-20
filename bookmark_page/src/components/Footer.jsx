
import facebook from '../assets/images/icon-facebook.svg'
import twiteer from '../assets/images/icon-twitter.svg'

import footerLogo from '../assets/images/footer-logo.svg'

function Footer() {
  return (
    <div className='bg-very-dark-blue'>
      <footer className='flex flex-col items-center  gap-10 text-center py-8 md:flex-row md:px-8 md:justify-between'>
       <ul className='text-white flex flex-col gap-5 uppercase font-thin md:flex-row'>
        <li><a href="/"><img src={footerLogo} alt="logo" /></a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Contact</a></li>
       </ul>
       <ul className='flex gap-10'>
        <li><a href=""><img src={facebook} alt="facebook" /></a></li>
        <li><a href=""><img src={twiteer} alt="twiteer" /></a></li>
       </ul>
      </footer>
    </div>
  )
}

export default Footer
