import React from 'react'
import img1 from '../assets/image/img-1 (1).jpg'
import img2 from '../assets/image/img-2 (1).jpg'
import img3 from '../assets/image/img-3 (1).jpg'
import './OurGallary.css'
const OurGallary = () => {
  return (
   <>
    <div className='gallarydiv' >
        <h3 ><i>Our Gallary</i></h3>
    <h1 >Awesome place good decoration to <br /> spend quality time</h1>
    <div>
<img className='gallaryimg'  src={img1} alt="" />
<img className='gallaryimg'  src={img2} alt="" />
<img className='gallaryimg'  src={img3} alt="" />
    </div>
   </div>
   </>
  )
}

export default OurGallary