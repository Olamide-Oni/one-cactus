import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { PiBag } from "react-icons/pi";


const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'><img src={logo} alt="one-cactus-logo" className='logo' /></Link>
            
        </div>
        <div className='user-panel w-full '>
            <ul className='flex justify-between'>
                <li><button>ACCOUNT</button></li>
                <li><button>SEARCH</button></li>
                <li><button>WISHLIST (0)</button></li>
            </ul>
            <Link to='/cart' className='cart-logo'><PiBag /></Link> 
        </div>
    </div>
  )
}

export default Header