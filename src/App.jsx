
import './App.css'
import Destination from './Destination'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Suscribe from './components/Suscribe'
import Testimonials from './components/Testimonials'
import Trip from './components/Trip'

function App() {
  

  return (
    <div className='bg-gray-100'>
    <div className="bgg-yellow-decore bg-no-repeat bg-contain w-[100%]">
      <Header/>
      <Hero/>
    </div>
    <div>
      <Category/>
      <Destination/>
      <Trip/>
      <Testimonials/>
      <Logos/>
      <Suscribe/>
      <Footer/>

      
    </div>
    </div>

  )
}

export default App
