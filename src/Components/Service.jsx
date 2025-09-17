import React from 'react'
import { IoMdWine } from "react-icons/io";
import ServiceCard from './ServiceCard'
import { FaBasketShopping } from "react-icons/fa6";
import { BsCake } from "react-icons/bs";
import { TbSaladFilled } from "react-icons/tb";
import { GiRoundTable } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import './Service.css'

const Service = () => {
  return (
    <>
    <div className='servicecard' >
        <h3 > <i>Our services</i> </h3>
        <h1 >We provide good services with lots <br /> of facilities</h1>
       <div className='servicesecond' >
         <ServiceCard icon={<IoMdWine className='serviceicon' />} title="Fresh Food" />
         <ServiceCard icon={<FaBasketShopping className='serviceicon' />} title="Quality Cuisine"/>
         <ServiceCard icon={<BsCake className='serviceicon' />} title="Bread & Pancake"/>
<ServiceCard icon={<TbSaladFilled  className='serviceicon'/>} title="Fresh Vegies Salad"/>
         <ServiceCard icon={<GiRoundTable className='serviceicon' />} title="Event Management"/>
<ServiceCard icon={<FaBowlFood className='serviceicon' />} title="Reserve Now"/>
       </div>
    </div>
    </>
  )
}

export default Service