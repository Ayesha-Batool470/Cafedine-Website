import React from 'react'
import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
import Footer from '../Components/Footer';
import ContactSection from '../Components/ContactSection';
const ContactPage = () => {
  return (
       <>
        <div style={{overflowX:"hidden",overflowY:"hidden"}}>
    <Nav />
     <AboutLandingPage img={img1} title="Get In Touch" />
     <ContactSection/>
       <Footer/> 
       </div>
   </>
  )
}

export default ContactPage