import React from 'react'

export default function Footer() {
  return (
    <footer className='container' >
<div className='row pt-5  pb-5 margin-zero
'>
    

    
    <div className='col-lg-2  '>
    <a  href="#" className='marg'><img src='logoo.png'/>  </a>
    <p className='pt-4 f-c'><i class="bi bi-geo-alt px-2 fs-5"></i>Balaju,Kathmandu<br></br>
           <span className='px-5'>Nepal</span></p>
           <p className=' f-c'><i class="bi bi-envelope fs-5 px-2"></i><span>contact@gmail.com</span></p>
           <p className=' f-c'><i class="bi bi-telephone fs-5 px-2"></i><span>+010123456</span></p>
    </div>
    <div className='col-lg-2  '>
<p className='fw-semibold px-5'>Categories</p>
<ul className='list-unstyled fo-m lh-l fw-light'>
    <li >Men</li>
<li>Women</li>
<li>Accessories</li>
<li>Shoes</li>
<li>Watch</li>
<li>Dress</li>
</ul>
</div>
<div className='col-lg-2 '>
<p className='fw-semibold'>Information</p>
<ul className='list-unstyled fo-m lh-l fw-light text-start '>
    <li >About us</li>
<li>Contact us</li>
<li>Terms & Conditions</li>
<li>Returns & Exchanges</li>
<li>Shipping & Delivery</li>
<li>Privacy Policy</li>
</ul>
</div>
<div className='col-lg-2 '>
<p className='fw-semibold'>Useful Links</p>
<ul className='list-unstyled fo-m lh-l fw-light text-start'>
    <li >Latest News</li>
<li>My Account</li>
<li>Size Guide</li>
<li>FAQs</li>
<li>FAQs 2</li>
</ul>
</div>
<div className='col-lg-3'>
<p className='fw-semibold '>Newsletter Signup</p>
<p className=' text-start f-c'>Subscribe to our newsletter and get <br></br>
      10% off your first purchase</p>
      <div className='position-relative' >
 <input className='b-0 text-start py-2 px-5 ' type={'email'} placeholder='Your email address'>

 </input>
 <button type="button" class="px-2  sub-btn ">Subscribe</button> 
      </div>
<img className='pt-4' src='payment.png'/>
</div>

</div>


    </footer>
    
  )
}



