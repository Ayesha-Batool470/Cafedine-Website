import React from 'react'
import './ConfirmationPart.css'

const ConfirmationPart = () => {
  return (
    <>
    <div className='confirmationcontainer'>
        <h3><i>Thank you</i>
        </h3>
        <h1>For your reservation</h1>
        <p>Your order hasn’t shipped yet but we will send you an email when it does.</p>
        <div className='confirmdiv'>
            <div className='one'>Back to shop</div>
             <div className='two'>Track Order</div>
        </div>
    </div>
    </>
  )
}

export default ConfirmationPart