import React from "react";
import about1 from '../assets/image/about-img.jpg'
import about2 from '../assets/image/about-2.jpg'
import './AboutSecPart.css'

const AboutSecPart = () => {
  return (
    <>
      <div className="AboutSec" >
       <div className="aboutsecdiv" >
         <img className="aboutimg1"  src={about1} alt="" />
        <img className="aboutimg2"  src={about2} alt="" />
       </div>
        <div className="aboutdiv" >
        <h1 >About us</h1>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          necessitatibus id, animi nemo quos eos minus adipisci veritatis
          quibusdamm.
        </p>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. repudiandae
          eius doloribus accusamus fugit .
        </p>
       <h5 >- Clean Environment</h5>
       <h5 >- Experience chefs</h5>
       <h3 >- Fresh and creative dishes</h3>
        <div className="btn">Book Now! <br />+34567890 </div>
        </div>
      </div>
    </>
  );
};

export default AboutSecPart;
