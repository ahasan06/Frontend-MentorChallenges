import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ShowcCase from './components/ShowcCase'
import AboutUs from './components/AboutUs'
import OurWork from './components/OurWork'
import { useState } from 'react'


function App() {
  

  return (
    <>
      <Header />

      <ShowcCase />
      <AboutUs />
      <OurWork />

      <Footer />
    </>
  )
}

export default App
