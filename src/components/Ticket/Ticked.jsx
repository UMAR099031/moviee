import React from 'react'
import './Ticked.css'
const Ticked = () => {
  return (
    <div className='domik'>
       <div className='tick'></div>
       <div className='num'>
        <img src="/public/kong.png" alt="" />
        <h2>SPIDERMAN ACROSS THE SPIDERVERSE</h2>
        <p>Movie description here...</p>
        <span>
            <h6>Duration</h6>
            <h6>2h 30m</h6>
        </span>
        <span>
            <h6>Type</h6>
            <h6>Cartoon</h6>
        </span>
       </div>
    </div>
  )
}

export default Ticked