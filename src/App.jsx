
import './App.css'
import Destination from './Destination'
import Category from './components/Category'
import Header from './components/Header'
import Hero from './components/Hero'
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

      
    </div>
    </div>

  )
}

export default App
