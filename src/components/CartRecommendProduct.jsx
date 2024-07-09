import React from 'react'

const CartRecommendProduct = ({image}) => {
  return (
    <div>
      <div className="recommendProductImage" style={{
        width: '200px',
        height: '300px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
         backgroundPosition: 'center',
      }}>
      </div>
    </div>
  )
}

export default CartRecommendProduct