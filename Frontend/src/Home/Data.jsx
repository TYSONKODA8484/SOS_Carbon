import React from 'react'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Footer from '../components/Footer'

function Data() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Info/>
      </div>
      <Footer/>
    </div>
  )
}

export default Data
