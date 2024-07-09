import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CartRecentProduct = ({product}) => {
  return (
    <div className='cart-recent-product'>
        <div
            style={{
                width: '200px',
                height: '300px',
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
        
        >

        </div>
        <div className='product-info'>
        <h2>{product.name}</h2>
        <p>{product.subName}</p>
        <div className='star-ratings'>
        <FaStar color="#FFC700" />
        <FaStar color="#FFC700" />
        <FaStar color="#FFC700" />
        <FaStar color="#FFC700" />
        <FaStar color="#FFC700" />
        
        </div>
      </div>
        <div className='price-icons'>
            <p>${product.price}</p>
            <div className='priceIcon'>
            <a><FaHeart /></a>
            <Link to='/cart'><MdOutlineShoppingCart /></Link>
            </div>
      </div>
    </div>
  )
}

export default CartRecentProduct