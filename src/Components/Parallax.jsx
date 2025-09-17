import React from 'react'
import {Parallax}  from 'react-parallax'
import  bg from '../assets/image/cta-bg.jpg'
const Parallax = () => {
  return (
  <>
  <div className='Parallax'>
<Parallax strength={600} bgImage={bg}>
    <div className='content'>
<div className="text-content">Normal Parallex

</div>
    </div>
</Parallax>
  </div>
  </>
  )
}

export default Parallax