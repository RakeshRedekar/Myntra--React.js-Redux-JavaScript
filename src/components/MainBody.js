import React from 'react'
import Sidebar from './Sidebar'
import './MainBody.css'
import Products from './Products'
import Footer from './Footer'

function MainBody() {
  
  return (
    <div className='mainBody'>
        <Sidebar />
        <Products />
        {/* <Footer /> */}
    </div>
  )
}

export default MainBody