import React from 'react'
import Navbar from '../COMPONENTS/Navbar'
import Footer from '../COMPONENTS/Footer'
import Books from '../COMPONENTS/Books'


function Allbooks() {
  return (
    <>
    <Navbar/>
    <br/>
    <div className='min-h-screen'>
    <Books/>
    </div>
    <Footer/>
    </>
  )
}

export default Allbooks
