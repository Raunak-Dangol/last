import React from 'react'
import lastData from './lastData'
export default function
() {
  return (
    <div className='d-flex'>
        {lastData.map((e,index)=>(
  <div className="px-5 last py-5 " >
    

  
    <p className="fo-m fw-bold " >  <img src={e.icon} alt="" className='hvr-wobble-horizontal' />{e.name}
    <p className="fo-m fw-normal last f-c ">{e.content}
    <br></br>{e.contenti}</p>
    
   
    </p>
    
    
    </div>
    ))}
    </div>
  )
}
