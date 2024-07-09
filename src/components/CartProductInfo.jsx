import React from 'react';
import { FaStar } from "react-icons/fa";
import { PiDress } from "react-icons/pi";
import Filter from './Filter';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";



const CartProductInfo = () => {
  return (
    <div>
        <div className="cartProductInfoTitle">
            <h2>CHEESE CAKE DRESS</h2>
            <h1>Girls Yellow Butterfly Floral with Ruched Waistline Details</h1>
            <div className="star-ratings-number">
                <div className='star-ratings'>
                    <FaStar color="#FFC700" />
                    <FaStar color="#FFC700" />
                    <FaStar color="#FFC700" />
                    <FaStar color="#FFC700" />
                    <FaStar color="#FFC700" />  
                </div>
                <p className='number'>(6)</p>
            </div>
            <div className="price-review">
                <p>$25.00</p>
                <a href=''>Write a review</a>
            </div>
        </div>
        <div className="cartProductSelection">
            <div className="size-selection">
                <h2>Size: Select a size </h2>
                <div className="size-buttons">
                    <button className="size-button">3 -4 yrs</button>
                    <button className="size-button">5 -6 yrs</button>
                    <button className="size-button">7-8 yrs</button>
                    <button className="size-button">9 - 10 yrs</button> 
                </div>
                <div className="size-guide">
                <a href="" className="size-guide-link">
                    <PiDress />
                    <p className='size-guide-text'>Size guide</p>
                </a>
                </div>
            </div>
        </div>
        <div className="number-selection-checkout">
             <select id="rangeSelect" defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <Link to="/checkout" className='cart-checkout-btn'>Proceed to Checkout</Link>
        </div>
        <div className="cartProductDescription">
            <h2>Description</h2>
            <p>Beautiful things come in little packages like this beautiful butterfly floral dress with ruched waistline details.</p>
            <p>This dress was specially designed with comfort in mind.</p>
            <p> Made with the softest cotton and fabric to ensure that it seats well on the body. Guaranteed to last and remain colorful all through wear.</p>
        </div>
        
        <div className="cartProductInfoFilters">
            <Filter filter="Material / Care" />
            <Filter filter="Details" />
        </div>
    </div>
  )
}

export default CartProductInfo