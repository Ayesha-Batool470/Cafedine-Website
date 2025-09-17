import React from 'react'
import Nav from "../Components/Nav";
import AboutLandingPage from './AboutLandingPage';
import img1 from '../assets/image/img-4.jpg'
const ErrorPage = () => {
  return (
   <>
<Nav/>
<AboutLandingPage img={img1} title="4O4 Error Found"/>
 <div>Error Page 404 found error</div>
   </>
  )
}

export default ErrorPage