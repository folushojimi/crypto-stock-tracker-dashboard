import React from 'react'
import Navbar from '../component/Navbar'
import Gridbackground from '../component/Gridbackground'

const Home = () => {
  return (
    <div className='relative bg-blue-500 h-screen '>
    <div className="absolute">
      <Navbar/>
    </div>
    </div>
  )
}

export default Home
