import React from 'react'
import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
import Footer from '../Components/Footer';
import CartComponents from '../Components/CartComponents';
const Cart = () => {
  return (
    <>
    <div >
    <Nav />
     <AboutLandingPage img={img1} title="Cart Page" />
     <CartComponents/>
     
       <Footer/> 
       </div>
   </>
  )
}

export default Cart