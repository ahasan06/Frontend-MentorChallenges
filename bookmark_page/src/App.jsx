
import ShowCase from './components/ShowCase'
import Nav from './components/Nav'
import Tabs from './components/Tabs'
import Download from './components/Download'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

function App() {


  return (
    <main className='overflow-hidden'>
     
      <Nav/>
      <ShowCase/>
      <Tabs/>
      <Download/>
      <FAQ/>
      <CTA/> 
      <Footer/>
    </main>
  )

}

export default App
