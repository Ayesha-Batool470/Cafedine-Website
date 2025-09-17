import React from "react";
import "./CartComponents.css";
import img from "../assets/image/popular-sm.jpg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { RxCross2 } from "react-icons/rx";

const CartComponents = () => {
  return (
    <>
      <div className=" cartcontainer">
       <div className="over">
         <div className="headlin">
          <p>Product name</p>
          <p className="space">&nbsp;</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
           <p className="spacet">&nbsp;</p>
        </div>
        <div class="cart1">
          <div className="mini">
            <img src={img} alt="" />
            <h5> Lemon Rosemary Chicken</h5>
          </div>

          <p> $79.00</p>
          <input type="text" name="" id="input" placeholder="1" />
          <p> $79.00</p>
          <RxCross2 className="carticon" />
        </div>
        <div class="cart1">
          <div className="mini">
            <img src={img} alt="" />
            <h5> Seasonal Soup</h5>
          </div>
          <p> $79.00</p>
          <input type="text" name="" id="input" placeholder="1" />
          <p> $79.00</p>
          <RxCross2 className="carticon" />
        </div>
        <div class="cart1">
          <div className="mini">
            <img src={img} alt="" />
            <h5> Pizza Pane</h5>
          </div>
          <p> $79.00</p>
          <input type="text" name="" id="input" placeholder="1" />
          <p> $79.00</p>
          <RxCross2 className="carticon" />
        </div>
         <div className="lasthead">
          <div className="displ">
            <input
              type="text"
              name=""
              id="inputing"
              placeholder="Enter your coupon"
            />
            <Button className="lightbtn" variant="light">
              Apply Coupon
            </Button>
          </div>
          <Button className="dangerbtn" variant="danger">
            Update Cart
          </Button>
        </div>
        
        </div>

       
        <div className="lastcontainer">
          <h5>Order Summery</h5>
          <p>Excepteur sint occaecat cupidat non proident sunt officia.</p>
        <div className="mixhead"> <p>Subtotal </p> <h6>$237.00</h6></div>
        <div className="mixhead"> <p>Shipping & Handling</p> <h6> $0</h6></div>
        <div className="mixhead"> <p>Estimated Tax</p> <h6> $0</h6></div>
        <div className="mixhead"> <p>Grand Total</p> <h6> USD $237.00</h6></div>
          <Button className="checkbtn" variant="danger">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartComponents;
