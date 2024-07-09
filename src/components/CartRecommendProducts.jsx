import React from 'react';
import CartRecommendProduct from './CartRecommendProduct';
import recommend1 from '../assets/images/recommend/recommend1.png';
import recommend2 from '../assets/images/recommend/recommend2.png';
import recommend3 from '../assets/images/recommend/recommend3.png';
import recommend4 from '../assets/images/recommend/recommend4.png';


const CartRecommendProducts = () => {
  return (
    <div className="recommendProducts">
      <CartRecommendProduct  image={recommend1}/>
      <CartRecommendProduct  image={recommend2}/>
      <CartRecommendProduct  image={recommend3}/>
      <CartRecommendProduct  image={recommend4}/>
    </div>
  )
}

export default CartRecommendProducts