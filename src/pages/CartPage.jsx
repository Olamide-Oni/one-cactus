import React from 'react';
import Promo from '../components/Promo';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CartPromo from '../components/CartPromo';
import CartRecent from '../components/CartRecent';
import CartRecommend from '../components/CartRecommend';
import Footer from '../components/Footer';
import CartProduct from '../components/CartProduct';

const CartPage = () => {
   
  return (
    <>
       <Promo /> 
       <Header />
       <Navbar />
       <CartPromo />
       <div className="cartProductIntro"><p>KIDS | GIRL CLOTHING | <span>SUMMER DRESSES</span></p></div>
       <CartProduct />
       <hr />
       <CartRecent />
       <CartRecommend />
       <Footer />



    </>
  )
}

export default CartPage