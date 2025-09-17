import {Link} from "react-router-dom";
import { useRef } from "react";
import { IoIosMenu } from "react-icons/io";

import logoimg from "../assets/image/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import "./Nav.css";
const Nav = () => {
  const navRef = useRef();
  const ShowNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <>
      <header>
        <img className="logoimg" src={logoimg} alt="" />

        <nav ref={navRef}>
          <Link to="/"> HOME</Link>
       
           <Link to="/ABOUT"> ABOUT</Link>
          <Link to="/RECIPES"> RECIPES</Link>
          <Link to="/GALLARY"> GALLARY</Link>
          
          <div
            class="dropdown"
            style={{ marginRight: "3vw", marginLeft: "2vw", width: "10vw" }}
          >
            RESERVATION
            <IoIosArrowDown className="menicon" />
            <div class="dropdown-content">
              
              <Link to="/RESERVATION">RESERVATION</Link>
              <Link to="/Cart">Cart</Link>
              <Link to="/SHIPPING">SHIPPING</Link>
              <Link to="/PAYMENT">PAYMENT</Link>
              <Link to="/CONFIRMATION">CONFIRMATION</Link>
            </div>
          </div>
          <div class="dropdownb">
            BLOG
            <IoIosArrowDown className="menicon" />
            <div class="dropdown-content">
              <Link to="/BLOG">BLOG</Link>
              <Link to="/BLOG SINGLE">BLOG SINGLE</Link>
            </div>
          </div>

          <Link to="/CONTACT">CONTACT</Link>
        </nav>

        <button className="nav-btn nav-close-btn" onClick={ShowNavbar}>
          <IoIosMenu style={{ backgroundColor: "white", color: "black" }} />
        </button>
      </header>
    </>
  );
};

export default Nav;
