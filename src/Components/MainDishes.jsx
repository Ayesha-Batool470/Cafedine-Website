import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainDishes.css'
const MainDishes = (props) => {
  return (
    <>
     <Card className='maindishes' >
            <Card.Img className='mainimg'   variant="top" src={props.img} />
            <Card.Body className='mainbody'>
              <Card.Title className='maintitle'>Tuna Roast Source - 23$</Card.Title>
              <Card.Text className='maintext' >
                Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives
              </Card.Text>
               <Button  className='button' variant="danger">Add To Cart</Button>
            </Card.Body>
          </Card>
    </>
  )
}

export default MainDishes