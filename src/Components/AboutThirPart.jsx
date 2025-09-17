import React from 'react'
import AboutThirdCard from './AboutThirdCard'
import img1 from '../assets/image/chef_1.jpg'
import img2 from '../assets/image/chef_2.jpg'
import img3 from '../assets/image/chef_3.jpg'
import './AboutThirdPart.css'

const AboutThirPart = () => {
  return (
   <>
   <div className='thirdcard' >
    <h3 className='chefh' ><i>Meet The Chefs</i></h3>
    <h1 >We have experienced and creative <br /> chefs to start</h1>
   

<div className='divclass' >
    <AboutThirdCard img={img1} title1="Daniel Graham" title="Master chef"/>
    <AboutThirdCard img={img2} title1="Nick Browning" title="Master chef"/>
    <AboutThirdCard img={img3} title1="Willium Jack" title="Master chef"/>
</div>
   </div>
   </>
  )
}

export default AboutThirPart