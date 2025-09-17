import React from 'react'
import './ContactSection.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineError } from "react-icons/md";

const ContactSection = () => {
  return (
   <>
   <div className='contactcontainer'>
    <h3><i>Contact us</i></h3>
    <h1>Get in touch</h1>
   <div className='contactinputdiv'>
     <input type="text"  placeholder=' Your Name'  />
    <input type="text"  placeholder='Email Address'  />
     <input type="text"  placeholder='Phone Number'  />
    <input type="text"  placeholder='Subject'  />
     <textarea name="Message" id="message" placeholder=' Your Message'/>
   
   </div>
   <Button className='Contactbtn'  variant="dark">Send Message</Button>
   </div>
   <div className='secondComp'>
    <MdOutlineError className='contacticon' />
    <h4>Oops! Something went wrong.</h4>
    <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
   </div>
   
   
   
   </>
  )
}

export default ContactSection