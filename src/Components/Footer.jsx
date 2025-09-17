import React from 'react'
import './Footer.css'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineWidthNormal } from "react-icons/md";

const Footer = () => {
  return (
    <>
   <div className='FooterContainer' style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden"}}>
    <div className='footer1'>
      <div className='foot1'>
      <h2>
        About
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nam!</p>
    </div>
    <div className='foot2'>
      <h2> Contact Info</h2>
 <p><MdOutlinePhoneAndroid /> +1 987 654 3210</p>
      <p> < TfiEmail /> &nbsp; mail@support.com</p>
      <p> <MdOutlineWidthNormal /> &nbsp;1234 Altschul, New York,NY 10027-0000</p>
    </div>
    <div className='foot3'>
      <h2>Opening Hours</h2>
     <p>Monday - Thursday</p>
     <h2>10:00 AM - 11:00 PM</h2>
    <p>Friday - Sunday</p>
    <h2>12:00 AM - 03:00 AM</h2>
    </div>
    </div>
     <div className='footer2'>
      <h4>Get latest food recipe at your inbox</h4>
      <input type="text"  placeholder='Enter Email'  />
    </div>
    <div className="footer3">
<p>Copyright © 2019 a theme by themefisher.com</p>
<nav>
  <p>Home</p>
  <p>About us</p>
  <p>Gallary</p>
  <p>Privacy Policy</p>
  <p>use of terms</p>
</nav>
   
    </div>
   </div>
   
    </>
  )
}

export default Footer