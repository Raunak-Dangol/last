import React from 'react'
import Add from './Add'
import Addd from './Addd'
import Product from './Product'
import Blog from './Blog'
import Last from './Last'
import Footer from './Footer'
import Copyright from './Copyright'
import Bestsel from './Bestsel'
import Twopic from './Twopic'
import Buttn from './Buttn'
export default function () {
  return (
    <div>
    <div className='mbody'>
        
    <Addd/>
    
    </div>
   <div className='mbody'>
      <Product/>
  </div>
  <div className='mbody'>
      <Buttn/>
  </div>
  <div className='mbody'>
      <Twopic/>
  </div>
  <div className='mbody'>
      <Bestsel/>
  </div>

    <div className='mbody'>
      <Blog/>
  </div>
  <div className='mbody'>
      <Last/>
    </div>
   <div className='mbody  bagcol'>
      <Footer/>
    </div>
    <div className='mbody'>
      <Copyright/>
    </div>
    </div>
  )
}
