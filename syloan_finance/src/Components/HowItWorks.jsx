import React from 'react'
import './Components.css'
import howitworks from "./Assets/howitworks.jpg"


const HowItWorks = () => {
  return (
    <div className='how-works'>
      <div className='heading-work'>
        <p>How it Works</p>
        <p>We Help You to Find <span>The Cheapest</span> Loan</p>
      </div>

      <img src={howitworks} alt="1422211" />


    </div>
  )
}

export default HowItWorks;