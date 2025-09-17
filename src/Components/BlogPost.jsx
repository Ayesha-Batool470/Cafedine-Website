import React from "react";
import BlogCard from "./BlogCard";
import img1 from "../assets/image/1.jpg";
import img2 from "../assets/image/2.jpg";
import img3 from "../assets/image/img-2.jpg";
import img4 from "../assets/image/menu-2.jpg";
import img5 from '../assets/image/news-sm-img1.jpg'
import img6 from '../assets/image/news-sm-img2.jpg'
import img7 from '../assets/image/news-sm-img3.jpg'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { BiSolidFace } from "react-icons/bi";
import "./BlogPost.css";

const BlogPost = () => {
  return (
    <>
      <div className="blogcontainer">
        <div className="cardconatiner">
          <BlogCard img={img1} title="The Festive Season is Approaching" />
          <BlogCard img={img2} title="Join Us For a Delicious Event" />

          <BlogCard img={img3} title="Salted chicken fried rice" />
          <BlogCard img={img4} title="Rastaurex crab with curry" />
        </div>
        <div className="Blogsecondcontain">
          <input type="text" placeholder="Search" />
          <h2>
            <i>Follow us</i>
          </h2>
          <div>
            <FaFacebookF className="blogicon" />
            <CiTwitter className="blogicon" />
            <BiSolidFace  className="blogicon"/>
            <FaLinkedinIn className="blogicon" />
            <FaPinterestP className="blogicon" />
            <IoBasketballOutline className="blogicon" />
          </div>
          <h2>
            <i>Popular Posts</i>
          </h2>
          <div className="popular">
            <img src={img5} alt="" />
            <div className="popularmini">
              <h5>Salted fried chicken recipe .</h5>
              <p>May 16, 2019</p>
            </div>
          </div>
          <div className="popular">
            <img src={img6} alt="" />
            <div className="popularmini">
              <h5>Lemon rosemary rice cooking.</h5>
              <p>May 16, 2019</p>
            </div>
          </div>
          <div className="popular">
            <img src={img7} alt="" />
            <div className="popularmini">
              <h5>Join Us For a Delicious Event</h5>
              <p>May 16, 2019</p>
            </div>
          </div>

          
          <div className="category">
            <h1>Categories</h1>
            <p>Web Design (14)</p>
            <p>Development (12)</p>
            <p>Marketing (10)</p>
            <p>Video Production (1)</p>
          </div>
          <div className="tag">
            <h1>Popular Tags</h1>
            <Button className="tagbtn" variant="light">Design</Button>{" "}
            <Button className="tagbtn" variant="light">Marketing</Button>{" "}
            <Button className="tagbtn" variant="light">Development</Button>{" "}
            <Button className="tagbtn" variant="light">Seo</Button>{" "}
            <Button className="tagbtn" variant="light">Agency</Button>{" "}
            <Button className="tagbtn" variant="light">Wordpress</Button>{" "}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
