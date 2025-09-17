import React from 'react'
import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
import Footer from '../Components/Footer';
import ConfirmationPart from '../Components/ConfirmationPart';

const Confirmation = () => {
  return (
   <>
   <div style={{overflowX:"hidden",overflowY:"hidden"}}>
    <Nav />
     <AboutLandingPage img={img1} title="Confirmation" />
     <ConfirmationPart/>
       <Footer/> 
       </div>
   </>
  )
}

export default Confirmation
