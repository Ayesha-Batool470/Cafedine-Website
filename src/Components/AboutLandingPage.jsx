import React from 'react'

import './AboutLandingPage.css'
const AboutLandingPage = (props) => {
  return (
   <>
   <div className='landing'>
    <img style={{height:"70vh",width:"100vw",objectFit:
      "cover"
    }} src={props.img} alt="" />
    <h1>{props.title}</h1>
   </div>
   </>
  )
}

export default AboutLandingPage