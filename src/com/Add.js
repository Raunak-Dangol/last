import React from 'react'
import 'animate.css';
export default function 
() {
  return (
    <div className='margin-zero '>
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
   
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="1.jpg" className="d-block w-100 position-relative" alt="..." />
      <div className="carousel-caption d-none d-md-block text-start abss
       animate__animated animate__backInLeft  ">
        <p className='l-hi'>SUMMER 2022</p>
       <p className='fsz l-hi'>New Arrival Collection</p>
       <button type="button" class="btt hvr-bounce-to-top fo-m">Explore Now</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="2.jpg" className="d-block w-100 position-relative" alt="..." />
      <div className="carousel-caption d-none d-md-block text-end   abss_i
       animate__animated animate__backInRight ">
        <p className='l-hi' >NEW SEASON</p>
        <p className='fsz l-hi'>Lookbook Collection</p>
        <button type="button" class="btt hvr-bounce-to-top fo-m ">Explore Now</button>
      </div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
