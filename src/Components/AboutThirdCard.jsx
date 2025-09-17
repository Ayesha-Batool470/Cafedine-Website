import React from "react";
import Card from 'react-bootstrap/Card';
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import './AboutThirdCard.css'


const AboutThirdCard = (props) => {
  return (
    <>
      <Card className="card" >
        <Card.Img className="cardimg"
          
          variant="top"
          src={props.img}
        />
        <Card.Body className="cardbody" >
          <Card.Title className="cardtitle">
            
            {props.title1}
          </Card.Title>
          <Card.Title className="cardtitle2" >
            {props.title}
          </Card.Title>
          <Card.Text className="cradtext" >
            Far from the countries Vokalia and Consonantia, there live the blind
            texts. They live in Bookmarksgrove.
          </Card.Text>
<div className="icondiv">
  <TiSocialFacebook className="cardicon"  />
<CiTwitter className="cardicon"  />
<FaLinkedinIn  className="cardicon"  />
</div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutThirdCard;
