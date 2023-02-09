import React from 'react'
import BlogData from './BlogData'
export default function Blog() {
  return (
    <div className='margin-zero container'>
    <div>
        <div className='blog text-center'>
        <h4>LATES FROM BLOG</h4>
        
    </div>
    <p className='fo-2 text-center'>The freshest and most exciting news</p>
</div>
    

 



<div className='d-flex py-5 px-5 container'>
  {BlogData.map((value,index)=>(
  <div className="px-4 bor" style={{width: '23rem'}}>
    <div className='bx'>
  <img src={value.cover} className="py-2  " alt="" />
  </div>
    <p className="fw-semibold l-hii pa-t">{value.content}</p>
    <p className="fo-m">{value.admin}</p>
    <p className="f-c">{value.smcontent}</p>
    </div>
    ))}</div>
</div>
  


  
  
  )
}
