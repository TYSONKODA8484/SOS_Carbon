import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carbon_data from '../components/Carbon_data'

function Carbon() {
  return (
    <div >
        <Navbar/>
        <div className='min-h-screen'>
        <Carbon_data/>
        </div>
        <Footer/>
    </div>
  )
}

export default Carbon
