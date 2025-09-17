import React from "react";
import './BlogCard.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const BlogCard = (props) => {
  return (
    <>
      <div className="blogcard">
        <img src={props.img} alt="" />
        <div className="blogsecond">
           <Button className='cook'  variant="light">Cooking</Button>
          
           <p>Oct 16, 2019 | 06 Comment (s)</p>
        </div>
        <h1>{props.title}</h1>
        <p>
          The little rotter spiffing good time lemon squeezy smashing excuse my
          French old, cheesed off give us a bell happy days brown bread, blow
          off Harry barney bobby. Cup of char gormless hors.!
        </p>
        <Button  className="blogbtn" variant="danger">Read More</Button>
      </div>
    </>
  );
};

export default BlogCard;
