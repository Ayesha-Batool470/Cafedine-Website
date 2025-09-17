import React from 'react'
import CardItem from './CardItem'
import './CardContainer.css'
import { TbSoupFilled } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri";

const CardContainer = () => {
  return (
    <>
  <div className='main-container'style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden" }}>
       <CardItem  icon={<TbSoupFilled className='homeicon'  />}  title="Delicious Food"/>
   <CardItem  icon={<BiFoodMenu className='homeicon'  />}   title="Online Order" />
    <CardItem icon={<RiMapPin2Fill className='homeicon'  />} title="Free delivery"/>
  </div>
    </>
  )
}

export default CardContainer