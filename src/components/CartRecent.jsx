import React from 'react';
import CartRecentProducts from './CartRecentProducts';


const CartRecent = () => {
  return (
    <div className='cart-recent'>
        <h2 className='recently-viewed-title'>Recently Viewed</h2>
        <div className="RecentProduct">
          <CartRecentProducts />  
        </div>
    </div>
  )
}

export default CartRecent