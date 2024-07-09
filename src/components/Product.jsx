import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = ({ product, imageUrl }) => {
  return (
    <div style={{ width: '300px', height: '607px', padding: '20px',  }} className='product-container'>

      <div
        style={{
          width: '271px',
          height: '436px',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
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
  );
};

export default Product;
