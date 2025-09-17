import React from 'react'

import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
import Footer from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import BlogPost from '../Components/BlogPost';
const BlogPage = () => {
  return (
       <>
        <div style={{overflowX:"hidden",overflowY:"hidden"}}>
    <Nav />
     <AboutLandingPage img={img1} title="Blog Posts" />
     <BlogPost/>
       <Footer/> 
       </div>
   </>
  )
}

export default BlogPage