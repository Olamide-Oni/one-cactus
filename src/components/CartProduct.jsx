import React from 'react';
import CartProductImage from './CartProductImage';
import CartProductInfo from './CartProductInfo';
import cartProduct1 from '../assets/images/cartproduct/cartProduct1.png';


const CartProduct = () => {
  return (
    <div className='cart-product'>
        <CartProductImage image={cartProduct1} />
        <CartProductInfo />
    </div>
  )
}

export default CartProduct