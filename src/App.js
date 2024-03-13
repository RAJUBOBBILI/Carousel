import React from 'react'
import './App.css'
import Carousel from './components/Carousel'


const App = () => {
  return (
    <div >
      <div className='container'><h1 className='heading'>Today's Deals </h1>
      </div>

      <Carousel />
    </div>
  )
}

export default App