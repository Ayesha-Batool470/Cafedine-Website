import React from 'react'
import image from '../assets/image/CafeDine.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiSamuraiHelmet } from "react-icons/gi";
import { AiOutlineApple } from "react-icons/ai";
import './Phone.css'

const Phone = () => {
  return (
    <>
    <div className='phonecontainer' style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden"}}>
        <img src={image} alt="" />
        <div className='head'>
            <h3><i>Make it easy</i></h3>
            <h1>Get the CafeDine <br />
                App</h1>
                <p>Get instant access to recipes from celebrity Cafedia <br /> and world-renowed brands right in your pocker.</p>
                 <div className='flxbtn'>
                    <Button className='flxbtn-btn'  variant="dark"><GiSamuraiHelmet className='phoneicon' /> GET IT ON
                    <h5>GOOGLE PLAY</h5>
                    </Button>
                     <Button className='flxbtn-btn'  variant="outline-secondary"> <AiOutlineApple className='phoneicon'   />GET IT ON
                     <h5>APP STORE</h5>
                     </Button>
                 </div>
        </div>
    </div>
    </>
  )
}

export default Phone