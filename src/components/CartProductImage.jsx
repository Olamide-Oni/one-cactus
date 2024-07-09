import React from 'react';


const CartProductImage = ({image}) => {
  return (
    <div >
        <div className='cartProductImage' style={{
             width: '200px',
            height: '300px',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >

        </div>
    </div>
  )
}

export default CartProductImage