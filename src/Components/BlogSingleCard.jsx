import React from "react";
import "./BlogSingleCard.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/image/img-4.jpg";
import img8 from "../assets/image/author1.jpg";
import img9 from "../assets/image/author2.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const BlogSingleCard = (props) => {
  return (
    <>
      <div className="blogSinglecard">
        <img src={props.img} alt="" />
        <div className="blogsecond">
          <Button className="cook" variant="light">
            Cooking
          </Button>

          <p>Oct 16, 2019 | 06 Comment (s)</p>
        </div>
        <h1 className="singleho">{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odio
          aperiam nostrum sequi mollitia, sapiente eos aspernatur obcaecati
          molestias cupiditate autem, tempora dicta esse. Reprehenderit unde,
          maiores at expedita repellendus.
        </p>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happinesso one
          rejects dislikes actual teachings of the great explorer of the truth
          the master-builder of human
        </p>
        <p>
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI.Efficiently unleash cross-media information without
          cross-media value. Quickly maximize timely deliverables for real-time
          schemas. Dramatically maintain clicks-and-mortar solutions without
          functional solutions.
        </p>
      </div>
      <div className="smallheading">
        <p>Share Now :</p>
        <div className="twoicon">
          {" "}
          <FaFacebookF className="blogicon" />
          <h5>FACEBOOK</h5>{" "}
        </div>
        <div  className="twoicon">
          <CiTwitter className="blogicon" /> <h5> TWITTER</h5>
        </div>
        <div  className="twoicon">
          <FaLinkedinIn className="blogicon" /> <h5>LINKDIN</h5>
        </div>
        <div  className="twoicon">
          <FaPinterestP className="blogicon" />
          <h5>PINTEREST</h5>
        </div>
      </div>
      <div className="commentdiv">
        <h1>3 Comments</h1>
        <div className="smallimg">
          <img src={img8} alt="" />
          <div className="secsmallhead">
            <h5>John Doe</h5>
            <p>
              Maecenas fermentum consequat mi Donec fermentum Pelle maleuada
              nulla amiuis sapien sem aliquet nec commodo eget consequat
            </p>
            <p>reply</p>
          </div>
        </div>
        <div className="smallimg2">
          <img src={img9} alt="" />
          <div className="secsmallhead">
            <h5>John Doe</h5>
            <p>
              Maecenas fermentum consequat mi Donec fermentum Pelle maleuada
              nulla amiuis sapien sem aliquet nec commodo eget consequat
            </p>
            <p>reply</p>
          </div>
        </div>
        <div className="smallimg">
          <img src={img8} alt="" />
          <div className="secsmallhead">
            <h5>John Doe</h5>
            <p>
              Maecenas fermentum consequat mi Donec fermentum Pelle maleuada
              nulla amiuis sapien sem aliquet nec commodo eget consequat
            </p>
            <p>reply</p>
          </div>
        </div>
      </div>
      <div className="leave">
        <h4>Leave a comment</h4>
        <input type="text" name="" id="inputs" placeholder="Your Name" />

        <input type="text" name="" id="inputs" placeholder="Your Email" />
        <textarea name="Message" id="message" placeholder="Your Comment" />
        <Button className="leavebtn" variant="danger">
          Post Comment
        </Button>
      </div>
    </>
  );
};

export default BlogSingleCard;
