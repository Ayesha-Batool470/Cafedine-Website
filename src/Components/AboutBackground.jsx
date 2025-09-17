
import {Parallax}  from 'react-parallax'
import  bg from '../assets/image/cta-bg.jpg'
import './AboutBackground.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const AboutBackground = () => {
  return (
     <>
      <div className='Parallax'>
    <Parallax strength={600} bgImage={bg}>
        <div className='content'>
    <div className="text-content">
        <h3><i>Prepare The Best Dishes</i></h3>
        <h1>Are you looking for a <br /> quite place?</h1>
     <Button  variant="light">BOOK NOW</Button>
    </div>
        </div>
    </Parallax>
      </div>
      </>
  )
}

export default AboutBackground