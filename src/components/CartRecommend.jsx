import React from 'react'
import CartRecommendProducts from './CartRecommendProducts'

const CartRecommend = () => {
  return (
    <div className='cart-recommend'>
        <h2 className='recommend-title'>Recommended</h2>
        <div className="recommedProducts-container">
            < CartRecommendProducts />
        </div>
    </div>
  )
}

export default CartRecommend