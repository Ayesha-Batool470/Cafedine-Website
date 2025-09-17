import React from "react";
import "./ShippingCheckout.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const ShippingCheckout = () => {
  return (
    <>
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
          <div className="divone">
            <h2>Your Details</h2>

            <div className="inputdiv">
              <input
                type="text"
                className="secinputo"
                name=""
                id="inputing"
                placeholder="First Name"
              />

              <input
                type="text"
                name=""
                id="inputing"
                placeholder="Last Name"
              />

              <input
                className="secinput"
                type="text"
                name=""
                id="inputing"
                placeholder="Address 1"
              />

              <input
                type="country"
                name=""
                id="inputing"
                placeholder="Select Country "
              />

              <input
                className="secinput"
                type="text"
                name=""
                id="inputing"
                placeholder="City"
              />

              <input type="text" name="" id="inputing" placeholder="Zip Code" />

              <input
                className="secinput"
                type="text"
                name=""
                id="inputing"
                placeholder="Email"
              />

              <input
                type="text"
                name=""
                id="inputing"
                placeholder="Phone Number"
              />
              <textarea
                name="Message"
                id="messages"
                placeholder="Special Requirements"
              />
            </div>
            <Button className="shipbtn" variant="danger">
              Continue to Payment
            </Button>
          </div>
          <div className="divtwo">
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

export default ShippingCheckout;
