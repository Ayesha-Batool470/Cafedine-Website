import React from 'react'
import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
import Footer from '../Components/Footer';
import OurGallary from '../Components/OurGallary';
import OurGallarypart2 from '../Components/OurGallarypart2';
const GallaryPage = () => {
  return (
   <>
   <div style={{overflowX:"hidden",overflowY:"hidden"}}>
    <Nav />
     <AboutLandingPage img={img1} title="Our Gallary" />
     <OurGallary/>
     <OurGallarypart2/>
       <Footer/> 
       </div>
   </>
  )
}

export default GallaryPage