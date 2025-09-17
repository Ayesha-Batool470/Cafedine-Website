import React from 'react'
import Card from 'react-bootstrap/Card';
import './CardItem.css'
const CardItem = ( props) => {
  return (
<>

  <Card className='homestyle'   style={{overflowX: "hidden"}}>
      <Card.Body className='home-body'>
        
        {props.icon}
        <Card.Title className='hometitle' >{props.title}</Card.Title>
        <Card.Text className='hometext' >
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </>
  )
}

export default CardItem