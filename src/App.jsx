
import './App.css'
import Destination from './Destination'
import Category from './components/Category'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <div className='bg-red-400'>
    <div className="bgg-yellow-decore bg-no-repeat bg-contain w-[100%]">
      <Header/>
      <Hero/>
    </div>
    <div>
      <Category/>
      <Destination/>

      
    </div>
    </div>

  )
}

export default App
