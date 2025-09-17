import React from 'react'
import './DishCard.css'
const DishCard = (props) => {
  return (
    <>
    <div className='dishcard'>
        <img src={props.img} alt="" />
        <div className='dishcontent'>
            <h4>{props.title}</h4>
            <p>Chinese mustard/Chipotle aiol</p>
        </div>
    </div>
    </>
  )
}

export default DishCard