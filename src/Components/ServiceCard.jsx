import React from 'react'
import Card from 'react-bootstrap/Card';
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <>
     <Card className='cardservice' >
      <Card.Body className='card-body'>
        
        {props.icon}
        <Card.Title className='cardtitle' >{props.title}</Card.Title>
        <Card.Text className='cardtext' >
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </>
  )
}

export default ServiceCard