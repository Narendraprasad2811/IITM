import React from 'react'
import Navbar from '../COMPONENTS/Navbar'
import Footer from '../COMPONENTS/Footer'
import Books from '../COMPONENTS/Books'


function Allbooks() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Books/>
    </div>
    <Footer/>
    </>
  )
}

export default Allbooks
