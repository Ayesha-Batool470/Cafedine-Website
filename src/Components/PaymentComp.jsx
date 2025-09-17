import React from "react";
import "./PaymentComp.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../assets/image/card6.png'

const PaymentComp = () => {
  return (
    <>
      {" "}
      <div className="ShippingConatiner">
        <div className="shiphead">
          <div className="shipdiv">
            {" "}
            <h5>01</h5> <p>Shipping</p>
          </div>
          <div className="shipdive">
            {" "}
            <h5>02</h5> <p>Payment</p>
          </div>
          <div className="shipdive">
            {" "}
            <h5>03</h5> <p>Confirm Pay</p>
          </div>
        </div>
        <div className="bothheadings">
          <div className="diveone">
            <h2>Payment Details</h2>

            <div className="inputdiv">
              <div className="inputtwodiv">
                <p>Name Of The Card:</p>
                <input
                  type="text"
                  name=""
                  id="inputing"
                  placeholder="Enter your coupon"
                />
              </div>
              <div className="inputtwodiv">
                <p>Card Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <input
                  type="text"
                  name=""
                  id="inputing"
                  placeholder="First Name"
                />
              </div>
              <div className="inputtwodiv">
                <p>Card Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <input
                  type="text"
                  name=""
                  id="inputing"
                  placeholder="Name of Card"
                />
              </div>
              <div className="inputtwodiv">
                <p>Expiration Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <input
                  type="text"
                  name=""
                  id="inputing"
                  placeholder="01-01-2020"
                />
                
              </div>
               <div className="inputtwodiv">
                <p>Security Code:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <input
                  type="text"
                  name=""
                  id="inputing"
                  placeholder="*********"
                />
                
              </div>
               <div className="inputtwodiv">
                <p>Or Pay Via:</p>
                
                <img src={img} alt="" />
              </div>
              <div className="termscon">
                 <p> I have read and accept the terms and conditions.</p>
                 <Button className="leavebtn" variant="danger">
              Confirm
            </Button>
            
                </div>

            </div>
            {/* <Button className="shipbtn" variant="danger">
                 Continue to Payment
               </Button> */}
          </div>
           <div className="divetwo">
            <h5>Order Summery</h5>
            <p>Excepteur sint occaecat cupidat non proident sunt officia.</p>
         <div className="shipmix"> <p>Subtotal</p> <h6> $237.00</h6></div> 
          <div className="shipmix"><p>Shipping & Handling</p>  <h6> $0</h6></div>
          <div className="shipmix"><p>Estimated Tax</p>  <h6> $0</h6></div>
          <div className="shipmix"><p>Grand Total </p>  <h6>USD $237.00</h6></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentComp;
