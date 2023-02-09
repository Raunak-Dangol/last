import React from 'react'
import ProdData from './ProdData'
import BestData from './BestData';
import 'animate.css';
export default function () {
  return (
    <div className=''>
    <div className='trend text-center'>
        <h4>Best Seller</h4>
        
    </div>
    <p className='fo-2 text-center'>Top sale in this week</p>

    

  <div className='mbody  '>
    {BestData.map((p,index)=>(
      <div className='bdy'>
      <div className='container mt-5'>
      
      <div className='item hvr-icon-pulse'>
      
      <img src={p.cover} className="" alt="" />
      
      <img src={p.hover} className=" hover-img  " alt="" />
      

     
      
      <i class="bi bi-heart  animate__animated animate__backInLeft  crt  hvr-icon "
      data-bs-toggle="popover" data-bs-placement="right"
      data-bs-custom-class="custom-popover"
      data-bs-title="Custom "
      ></i>
      <i class="bi bi-shuffle btm-1  animate__animated animate__backInLeft  crt  hvr-icon "></i>
      <button type="button" class="btn btn-light" >Quick view   <i class="bi bi-eye icn"></i> </button>
      <button type="button" class="btn btn-light btm ">Quick Shop  <i class="bi bi-cart icn"></i> </button>
      </div>


      </div>
      <div className=''>
      <p className='lh-l fw-semibold'>{p.name}</p>
      <p className='f-c l-hiii text-center'>{p.price}</p>
      </div>
  
      
      
      
      
      <div className='container mt-5'>
      
      <div className='item hvr-icon-pulse'>
      
      <img src={p.cover} className="" alt="" />
      
      <img src={p.hover} className=" hover-img  " alt="" />
      

     
      
      <i class="bi bi-heart  animate__animated animate__backInLeft  crt  hvr-icon "></i>
      <i class="bi bi-shuffle btm-1  animate__animated animate__backInLeft  crt  hvr-icon "></i>
      <button type="button" class="btn btn-light">Quick view   <i class="bi bi-eye icn"></i> </button>
      <button type="button" class="btn btn-light btm ">Quick Shop  <i class="bi bi-cart icn"></i> </button>
      </div>


      </div>
      <div className=''>
      <p className='lh-l fw-semibold'>{p.name}</p>
      <p className='f-c l-hiii text-center'>{p.price}</p>
      </div>
      
      </div>
      
      ))}
      


      
    </div>
    </div>
    
  )
}
