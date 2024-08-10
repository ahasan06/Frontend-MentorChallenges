/* eslint-disable no-unused-vars */
import logo from './assets/images/logo.svg'
import footerLogo from './assets/images/footerLogo.svg'
import hamburger from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close.svg'
import bgIntroDesktop from './assets/images/bg-simplify-section-desktop.svg'
import bgIntroMobile from './assets/images/bg-simplify-section-mobile.svg'
import bgPattern from './assets/images/bg-tablet-pattern.svg'
import bgillustration from './assets/images/illustration-intro.svg'

import facebook from './assets/images/icon-facebook.svg'
import youtube from './assets/images/icon-youtube.svg'
import twiteer from './assets/images/icon-twitter.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instagram from './assets/images/icon-instagram.svg'

import { useState } from 'react'

import data from '../data.json'

function App() {

  const [comment, setComment] = useState(data);
  const [cureentIndex, setCurrentIndex] = useState(0);
  console.log("comment", comment);


  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(toogleNav => !toogleNav)
  }

  const handleChange = (index) => {
    setCurrentIndex(index)
  }


  return (
    <div className='bg-very-pale-red bg-opacity-40 h-full relative overflow-hidden'>
      <img src={bgPattern} alt="pattern" className='absolute top-0 left-1/4  lg:left-3/4 lg:-translate-x-1/4 -translate-y-1/4 -z-10' />
      <img src={bgPattern} alt="pattern" className='absolute right-0 top-1/4 lg:top-2/4 lg:left-0 lg:-translate-x-2/4 translate-x-2/4 -z-10' />
      <header className='relative z-50 py-4'>
        <nav className='bg-transparent  min-h-16  xl:px-40 lg:px-28 md:px-20 px-8'>
          <div className='min-h-16 flex items-center justify-between'>
            <img src={logo} alt="logo" />
            <ul className={navOpen ? 'mobileNav' : 'desktopNav'}>
              <li><a href="">Pricing</a></li>
              <li><a href="">Product</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Community</a></li>
            </ul>
            <button className='custom-btn hidden md:block'><a href="#">Get Started</a></button>
            <button className='md:hidden cursor-pointer' onClick={handleNavOpen}>
              <img src={navOpen ? closeIcon : hamburger} alt="Menu-icon" role='button' />
            </button>
          </div>
        </nav>
      </header>

      <section className='md:flex flex-row-reverse justify-between md:items-center xl:px-40 lg:px-28 md:px-20 md:py-20'>
        <picture className='md:flex md:justify-end md:flex-1 '>
          <img src={bgillustration} alt="bg-illustration" />
        </picture>
        <article className='flex flex-1 flex-col gap-3 items-center text-center px-10 py-10 md:gap-8  md:items-start md:text-start md:py-0 md:px-0 md:w-3 '>
          <h1 className='text-3xl font-semibold md:text-3xl lg:text-4xl xl:w-3/4'>Bring everyone together to build better products.</h1>
          <p className='text-gray-700 font-thin md:text-sm lg:text-lg xl:w-3/4'>  Manage makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.</p>
          <button className='custom-btn'>Get Started</button>
        </article>
      </section>

      <section className='md:flex   xl:px-40 lg:px-28 md:px-20 md:py-20'>

        <article className='text-center px-10 py-10 md:text-start md:py-0 md:px-0'>
          <h1 className='text-3xl font-semibold md:text-3xl lg:text-4xl xl:w-3/4 md:pb-5'>What’s different about Manage?</h1>
          <p className='text-gray-700 font-thin md:text-sm lg:text-lg xl:w-3/4'>Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams. </p>
        </article>


        <article className='pl-5'>
          <div className='card'>
            <div className='card__title'>
              <p>01</p>
              <h3>Track company-wide progress</h3>
            </div>
            <p className='card__body '>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className='card'>
            <div className='card__title'>
              <p>02</p>
              <h3>  Advanced built-in reports</h3>
            </div>
            <p className='card__body'>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className='card'>
            <div className='card__title'>
              <p>03</p>
              <h3>  Everything you need in one place</h3>
            </div>
            <p className='card__body'>
              Stop jumping from one service to another to communicate, store files,
              track tasks and share documents. Manage offers an all-in-one team
              productivity solution.
            </p>
          </div>
        </article>

      </section>

      <section className='comment_section py-8 flex flex-col gap-20 items-center'>
        <h1 className='text-center text-3xl font-bold'>What they’ve said</h1>
        <article className='hidden lg:grid grid-cols-3 gap-5 '>
          {comment.slice(0,3).map((item, index) => (
            <div key={index} className='card relative px-5 bg-red-50  flex flex-col items-center rounded'>
              <img src={item.image} alt={item.name} className='w-16 h-16 bg-cover absolute -translate-y-1/2' />
              <div className="comment__body pt-14 flex flex-col items-center gap-6 text-center">
                <h3 className='font-bold text-xl text-slate-900'>{item.name}</h3>
                <p className='text-slate-600'>{item.comment}</p>
              </div>
            </div>
          ))}
        </article>
        <article className='block lg:hidden'>
          <div className='card relative px-4 bg-red-100 bg-opacity-30 flex flex-col items-center'>
            <img src={comment[cureentIndex].image} alt="ali" className='w-16 h-16 bg-cover absolute -translate-y-1/2' />
            <div className="comment__body pt-14 flex flex-col items-center gap-6 text-center">
              <h3 className='font-bold text-xl text-slate-900'>{comment[cureentIndex].name}</h3>
              <p> {comment[cureentIndex].comment}</p>
            </div>
          </div>

          <ul className='comment_btn lg:hidden flex items-center gap-3 justify-center pt-10'>
            {
              comment.map((_, index) => (
                <li
                  key={index}
                  onClick={() => handleChange(index)}
                  className={`h-3 w-3 border-2 ${cureentIndex == index ? 'bg-red-400' : 'border-red-400'} border-red-400 rounded-full cursor-pointer`}></li>
              ))
            }
          </ul>
        </article>

        <button className='custom-btn'>Get Started</button>

      </section>

      <section className='bg-bright-red relative md:px-20 lg:px-28'>
        <img src={bgIntroMobile} alt="bg intro" className='absolute md:hidden'/>
        <img src={bgIntroDesktop} alt="bg intro" className='absolute hidden md:block  bottom-0'/>

        <article className='px-10 py-20 md:px-0 md:py-16 flex flex-col items-center gap-10 md:flex-row md:justify-between'>
          <h1 className='text-4xl text-white text-center md:text-start md:w-96 xl:w-1/3'> Simplify how your team works today.
         </h1>
          <button className='bg-white text-bright-red font-bold px-8 py-4 rounded-full'> Get Started</button>
        </article>
      </section>

        <footer className='bg-very-dark-blue pt-10 pb-16 px-10 flex flex-col items-center gap-10 lg:items-start lg:flex-row-reverse lg:justify-between md:px-20 lg:px-28'>
          <article><input type="text" className='rounded-full py-3 px-4 text-sm font-normal ' placeholder='update your inbox...'/> <button className='text-white bg-bright-red px-7 py-3 rounded-full'>Go</button> </article>
          <article className='text-white font-thin flex justify-between gap-20 lg:gap-36 '>
            <ul className='flex flex-col gap-3'>
              <li><a href="">Home</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Product</a></li>
              <li><a href="">About us</a></li>
            </ul>
            <ul className='flex flex-col gap-3'>
              <li><a href="">Carrers</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Provate policy</a></li>
            </ul>
          </article>
          <article className=' flex flex-col gap-8 items-center md:flex-col-reverse'>
            <ul className='flex gap-8 md:gap-2'>
              <li><a href=""><img src={facebook} alt="facebook" className='w-8 md:w-5'/></a></li>
              <li><a href=""><img src={youtube} alt="youtube" className='w-8 md:w-5'/></a></li>
              <li><a href=""><img src={twiteer} alt="twiteer"className='w-8 md:w-5' /></a></li>
              <li><a href=""><img src={pinterest} alt="pinterest" className='w-8 md:w-5'/></a></li>
              <li><a href=""><img src={instagram} alt="instagram" className='w-8 md:w-5'/></a></li>
            </ul>
          <img src={footerLogo} alt="" />
          </article>
        </footer>
    </div>
  )
}

export default App
