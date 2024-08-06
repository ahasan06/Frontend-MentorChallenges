import logo from './assets/images/logo.svg'
import hamburger from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close.svg'
import bgIntroMob from './assets/images/bg-intro-mobile.svg'
import bgIntroDesk from './assets/images/bg-intro-desktop.svg'
import mobileIcon from './assets/images/image-mockups.png'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  console.log("screen Size", screenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (screenSize > 750) {
      setNavOpen(false)
    }
  }, [screenSize])

  const handleNavOpen = () => {
    setNavOpen(isNavOpen => !isNavOpen)
  }

  return (
    <main className='relative '>
      <header >
        <nav className="shadow bg-white min-h-16 relative z-50">
          <div className="min-h-16 flex items-center justify-between mx-10 px-5 lg:px-0">
            <img src={logo} alt="Logo"/>
            <ul className={navOpen ? 'mobile-navigation' : 'desktop-navigation'}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
            <button className='custom-btn  hidden md:block'>Request Invite</button>
            <button className='md:hidden cursor-pointer' onClick={handleNavOpen}>
              <img src={navOpen ? closeIcon : hamburger} alt="Menu icon" role='button' />
            </button>
          </div>
        </nav>
      </header> 
    </main>
  )
}

export default App
