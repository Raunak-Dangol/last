import React from 'react'

export default function Header() {
  return (
    <header >

<div className='   fo-s'>

<div className=' text-bg-danger  lh-lg text-center'>
<p>Today deal sale off 70%.End In.Hurry Up <i class="bi bi-arrow-right"></i></p>
</div>
      
          <div className='row margin-zero'>

          
            <div className=' col-lg-4 text-center '>
                <ul className='d-flex justify-content-start list-unstyled gap-3 fw-lighter align-middle px-3'>
                    <li>  <i class="bi bi-telephone"></i>  +01 23456789 </li>
            <li><i class="bi bi-envelope"></i> Kalles@domain.com</li>
                </ul>
        
            </div>
            <div className='col-lg-4'>
            <p className='d-flex justify-content-center align-middle fw-lighter'>Summer sale discount off 50% ! Shop Now</p>
</div>
<div className='col-lg-4'>
<ul className='d-flex justify-content-end list-unstyled gap-3 fw-lighter'>
    <li><i class="bi bi-geo-alt px-1"></i>Location</li>
<li>English</li>
<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USA
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">CAD</a></li>
            <li><a className="dropdown-item" href="#">EU</a></li>
            <li><a className="dropdown-item" href="#">USA</a></li>
            <li><a className="dropdown-item" href="#">UK</a></li>
            
          </ul>
        </li>
</ul>
</div>
        </div>
        
       </div> 
    
    </header>
    
  )
}
