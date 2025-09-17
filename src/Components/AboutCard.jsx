import React from 'react'
import Card from 'react-bootstrap/Card';
import './AboutCard.css'

const AboutCard = (props) => {
  return (
   <>
   <Card className='carddiv'   >
            <Card.Img  className='aboutimg' variant="top" src={props.img} />
            <Card.Body className='aboutbody' >
              <Card.Title className='abouttitle' >{props.title}</Card.Title>
              <Card.Text className='text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
   </>
  )
}

export default AboutCard