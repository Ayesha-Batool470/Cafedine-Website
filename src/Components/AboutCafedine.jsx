import React from 'react'
import AboutCard from './AboutCard'
import './AboutCafedine.css'
import img1 from '../assets/image/img-1.jpg'
import img2 from '../assets/image/img-2.jpg'
import img3 from '../assets/image/img-3.jpg'

const AboutCafedine = () => {
  return (
    <>
    <div className='aboutdi' style={{width:"100vw"}}  >
      <h4 className='HFOUR'><i>About CafeDine</i></h4>
    <h1 className='HONE'>We are a modern restaurant in <br /> the  center of the city</h1> 
    <div className='aboutcafedi' >
        <AboutCard img={img1} title="Quality Food" />
    <AboutCard img={img2} title="Friendly place"/>
    <AboutCard img={img3} title="Affordable price"/>
    </div>
    </div>
    </>
  )
}

export default AboutCafedine