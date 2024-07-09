import React from 'react';
import CartRecentProduct from './CartRecentProduct';
import product3 from '../assets/images/products/product3.png';
import product7 from '../assets/images/products/product7.png';
import product9 from '../assets/images/products/product9.png';
import product12 from '../assets/images/products/product12.png';


const products = [
  
  { id: 3, name: 'MARIGOLD DOT', subName: 'Cut-out lacey dress', price: "25.00", image: product3 },
  { id: 7, name: 'FLORAL ROOST', subName: 'Orange black dress', price: "25.00", image: product7 },
  { id: 9, name: 'SUMMER DANCE', subName: 'Orange pink floral dress', price: "35.00", image: product9  },
  { id: 12, name: 'QUINNEA', subName: 'Yellow patch floral dress', price: "35.00", image: product12  }
];

const CartRecentProducts = () => {

  return (
    <div className='cart-recent-products-container'>
      {products.map((product) => (
        <CartRecentProduct key={product.id} product={product} image={product.image}  />
      ))}
    </div>
  );
};

export default CartRecentProducts;
