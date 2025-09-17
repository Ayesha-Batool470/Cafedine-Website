import React from 'react'
import {Parallax}  from 'react-parallax'
import  bg from '../assets/image/cta-bg.jpg'
import './Background.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Background = () => {
  return (
     <>
      <div className='Parallaxone' style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden"}}>
    <Parallax strength={600} bgImage={bg}>
        <div className='contentone'>
    <div className="text-contentone">
        <h3><i>Prepare The Best Dishes</i></h3>
        <h1>Come & Experience Our Best of <br /> World Class Cousine</h1>
     <Button  variant="light">BOOK NOW</Button>
    </div>
        </div>
    </Parallax>
      </div>
      </>
  )
}

export default Background