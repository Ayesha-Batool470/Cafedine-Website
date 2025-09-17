import React from 'react'
import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
 import Dishes from '../Components/Dishes';

  import Footer from '../Components/Footer';
import ReceipesMaindishes from '../Components/ReceipesMaindishes';
const RecipesPage = () => {
  return (
    <>
    <div style={{overflowX:"hidden",overflowY:"hidden"}}>
     <Nav />
     <AboutLandingPage img={img1} title="Food Menu" />
     <Dishes/>
     <ReceipesMaindishes/>
     <Footer/> 
     </div>
    </>
  )
}

export default RecipesPage