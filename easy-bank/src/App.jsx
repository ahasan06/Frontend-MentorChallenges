import logo from './assets/images/logo.svg'
import hamburger from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close.svg'
import bgIntroMob from './assets/images/bg-intro-mobile.svg'
import bgIntroDesk from './assets/images/bg-intro-desktop.svg'
import mobileIcon from './assets/images/image-mockups.png'
import simpleBudgeting from './assets/images/icon-budgeting.svg'
import mobileBanking from './assets/images/icon-online.svg'
import onbording from './assets/images/icon-onboarding.svg'
import openApi from './assets/images/icon-api.svg'
import dollerExchange from './assets/images/image-currency.jpg'
import restaurant from './assets/images/image-restaurant.jpg'
import plane from './assets/images/image-plane.jpg'
import confetti from './assets/images/image-confetti.jpg'

import facebook from './assets/images/icon-facebook.svg'
import youtube from './assets/images/icon-youtube.svg'
import tweeter from './assets/images/icon-twitter.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instegram from './assets/images/icon-instagram.svg'

import footerLogo from './assets/images/logoFooter.svg'

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
    <main className='relative'>
      <header>
        <nav className="shadow bg-white min-h-16 relative z-50">
          <div className="min-h-16 flex items-center justify-between mx-10 md:mx-20">
            <img src={logo} alt="Logo" />
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

      <section className='md:flex flex-row-reverse justify-between'>
        <article className='md:relative'>
          <picture >
            <source media="(min-width:768px )" srcset={bgIntroDesk}  />
            <img src={bgIntroMob} alt="bg-intro-mobile" className='w-full' />
          </picture>
          <img src={mobileIcon} alt="mockup" className='absolute top-0 transform -translate-y-16 lg:-translate-y-32 xl:-translate-y-16 md:-right-24' />
        </article>

        <article className='flex flex-col items-center gap-4 text-center px-5 pb-14 md:pb-0 md:text-start md:items-start md:justify-center md:pl-20 '>
          <h1 className='text-4xl lg:text-5xl text-slate-700'> Next generation digital banking</h1>
          <p className='text-slate-400 text-lg xl:w-4/5'> Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.</p>
          <button className='custom-btn text-white inline-block'>Request Invite</button>
        </article>
      </section>

      <section className='bg-slate-100 flex flex-col px-5 py-10 md:px-20'>
        <article className=' flex flex-col text-center gap-4 md:text-start  lg:w-3/6 lg:pt-7'>
          <h2 className='text-4xl text-slate-600'>Why choose Easybank?</h2>
          <p className='text-lg text-slate-400 md:w-3/6 lg:w-4/6'>We leverage Open Banking to turn your bank account into your financial hub. Control
            your finances like never before.</p>
        </article>
        <div className='gap-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-16 lg:px-0'>
          <article className='flex flex-col items-center text-center gap-3 md:text-start md:items-start'>
            <img src={mobileBanking} alt="mobile banking" />
            <h2>Online Banking</h2>
            <p className='text-lg text-slate-400'>Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.</p>
          </article>
          <article className='flex flex-col items-center text-center gap-3 md:text-start md:items-start'>
            <img src={simpleBudgeting} alt="simple nufgeting" />
            <h2>Simple Budgeting</h2>
            <p className='text-lg text-slate-400'>See exactly where your money goes each month. Receive notifications when you’re
              close to hitting your limits.</p>
          </article>
          <article className='flex flex-col items-center text-center gap-3 md:text-start md:items-start'>
            <img src={onbording} alt="onbording" />
            <h2>Fast Onboarding</h2>
            <p className='text-lg text-slate-400'>We don’t do branches. Open your account in minutes online and start taking control
              of your finances right away.</p>
          </article>
          <article className='flex flex-col items-center text-center gap-3 md:text-start md:items-start'>
            <img src={openApi} alt="open api" />
            <h2>Open API</h2>
            <p className='text-lg text-slate-400'>Manage your savings, investments, pension, and much more from one account. Tracking
              your money has never been easier.</p>
          </article>
        </div>

      </section>

      <section className='flex flex-col gap-8 px-10 py-10 md:px-20'>
        <h2 className=' pt-10 text-center text-4xl text-gray-700 lg:text-start'>Latest Articles</h2>

        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
          <article className='shadow rounded-lg'>
            <img src={dollerExchange} alt="doller exchange" className='rounded-t-lg h-56 w-full object-cover' />
            <div className='p-8 flex flex-col gap-2 '>
              <span className='text-slate-400 text-sm'>By Claire Robinson</span>
              <h3 className='text-slate-600 text-xl'>Receive money in any currency with no fees</h3>
              <p className='text-slate-400'>The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …</p>
            </div>
          </article>

          <article className='shadow rounded-lg'>
            <img src={restaurant} alt="restaurant" className='rounded-t-lg  h-56 w-full object-cover' />
            <div className='p-8 flex flex-col gap-2 '>
              <span className='text-slate-400 text-sm'>By Wilson Hutton</span>
              <h3 className='text-slate-600 text-xl'>Treat yourself without worrying about money</h3>
              <p className='text-slate-400'>Our simple budgeting feature allows you to separate out your spending and set
                realistic limits each month. That means you …</p>
            </div>
          </article>

          <article className='shadow rounded-lg'>
            <img src={plane} alt="plane" className='rounded-t-lg  h-56  w-full object-cover' />
            <div className='p-8 flex flex-col gap-2'>
              <span className='text-slate-400 text-sm'>By Wilson Hutton</span>
              <h3 className='text-slate-600 text-xl'>Take your Easybank card wherever you go</h3>
              <p className='text-slate-400'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you …</p>
            </div>
          </article>

          <article className='shadow rounded-lg'>
            <img src={confetti} alt="confetti" className='rounded-t-lg  h-56 w-full object-cover' />
            <div className='p-8 flex flex-col gap-2'>
              <span className='text-slate-400 text-sm'>By Claire Robinson</span>
              <h3 className='text-slate-600 text-xl'>Our invite-only Beta accounts are now live!</h3>
              <p className='text-slate-400'>After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                It’s easy to request an invite through the site ...</p>
            </div>
          </article>
        </div>

      </section>

      <footer className='bg-dark-blue text-white p-10 flex flex-col gap-4 md:flex-row md:justify-between md:px-20'>
        <article className='flex flex-col items-center gap-8'>
          <img src={footerLogo} alt="logo" />
          <ul className='flex gap-3'>
            <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
            <li><a href="#"><img src={youtube} alt="facebook" /></a></li>
            <li><a href="#"><img src={tweeter} alt="facebook" /></a></li>
            <li><a href="#"><img src={pinterest} alt="facebook" /></a></li>
            <li><a href="#"><img src={instegram} alt="facebook" /></a></li>
          </ul>
        </article>
        <article className='flex flex-col items-center text-center text-slate-300 md:flex-row md:text-start md:gap-20'>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Supports</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

        </article>
        <article className='flex flex-col items-center gap-4 md:items-end'>
          <button className='custom-btn'>Request Invite</button>
          <span className='text-slate-400'>© Easybank. All Rights Reserved</span>
        </article>
      </footer>

    </main>
  )
}

export default App
