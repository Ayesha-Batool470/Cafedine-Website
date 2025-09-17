import React from "react";
import img1 from "../assets/image/gallery-1.jpg";
import img2 from "../assets/image/gallery-2.jpg";
import img3 from "../assets/image/gallery-3.jpg";

import img4 from "../assets/image/gallery-4.jpg";

import img5 from "../assets/image/gallery-5.jpg";

import img7 from "../assets/image/gallery-7.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallary.css'

const Gallary = () => {
  return (
   <>
   
    
    <div className="gallarycontainer" style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden"}}>
      
      <img src={img1} alt="" />
      <img src={img2} alt="" />

      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
   
      <img src={img7} alt="" />
    </div>
   </>
  );
};

export default Gallary;
