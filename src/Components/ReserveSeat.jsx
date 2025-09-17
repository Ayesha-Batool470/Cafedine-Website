import React from 'react'
import './ReserveSeat.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const ReserveSeat = () => {
  return (
   <>

   <div className='reservecontainer'>
    <div className='reserve'>
    <h3>Reservation</h3>
    <h1>Reserve your seat for betterment</h1>
   <div className='inputdive'>
 <label id='inp' for="fname">Name</label>
     <input  type="text"  placeholder='Name'  />
      <label id='inp' for="fname">Name</label>
    <input type="text"  placeholder='Email Address'  />
     <label id='inp' for="fname">Phone</label>
    <input   type="text"  placeholder='Phone Number'  />
     <label id='inp' for="fname">Num of person </label>
    <input className='secinput'  type="text"  placeholder='1 Person'  />
     <label id='inp'  for="fname">Date</label>
    <input  type="date"  placeholder='Select your date'  />
     <label id='inp'  for="fname">Time</label>
    <input  type="time"  placeholder='Select your time'  />
   </div>
    <Button className='reservebtn'  variant="dark">Rerserve Now</Button>
   </div>
<div className='secondreserve'>
     <h3><i>Check availabilty</i></h3>
   <h1>Opening Times</h1>
   <h5 style={{textAlign:"center"}}>Monday - Thursday</h5>
   <p style={{textAlign:"center"}}>9.00-12.00</p>
   <h5 style={{textAlign:"center"}}>Friday - Sunday</h5>
   <p style={{textAlign:"center"}}>2.00-8.00</p>
   <h3><i>Call us for</i></h3>
   <h1>02 34597879</h1>
</div>
   </div>
  
   
   </>



  )
}

export default ReserveSeat