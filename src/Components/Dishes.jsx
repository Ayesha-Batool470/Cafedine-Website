import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu1 from "../assets/image/menu-1.jpg";
import menu2 from "../assets/image/menu-2.jpg";
import menu3 from "../assets/image/img-3.jpg";
import menu4 from "../assets/image/menu-4.jpg";
import menu5 from "../assets/image/menu-5.jpg";
import menu6 from "../assets/image/menu-6.jpg";
import menu7 from "../assets/image/menu-7.jpg";
import menu8 from "../assets/image/menu-8.jpg";

import "./Dishes.css";
import DishCard from "./DishCard";
const Dishes = () => {
  return (
    <>
      <div className="dishcontainer" style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden"}}>
        <h3>
          <i> CafeDine Dishes</i>
        </h3>
        <h1>
          We provide quality food.We care <br />
          about your health
        </h1>
        <ul>
          <li>ALL</li>
          <li>STARTER</li>
          <li>LAUNCH</li>
          <li>DINNER</li>
        </ul>
        <div className="menucontainer">
          <DishCard img={menu1} title="Vitello Tonato - 23$" />
          <DishCard img={menu2} title="Vitello Tonato - 23$" />
          <DishCard img={menu3} title="Vitello Tonato - 23$" />
          <DishCard img={menu4} title="Vitello Tonato - 23$" />
          <DishCard img={menu5} title="Vitello Tonato - 23$" />
          <DishCard img={menu6} title="Vitello Tonato - 23$" />
          <DishCard img={menu7} title="Vitello Tonato - 23$" />
          <DishCard img={menu8} title="Vitello Tonato - 23$" />
        </div>
           <div className="btnimg">
             <Button variant="dark">VIEW FULL MENU</Button>
           </div>
      </div>
    </>
  );
};

export default Dishes;
