import React from 'react';
import Promo from '../components/Promo';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Search from '../components/Search';
import ProductListings from '../components/ProductListings';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <>
        <Promo />
        <Header />
        <Navbar />
        <Hero />
        <Search />
        <ProductListings />
        <Footer />
    
    </>
  )
}

export default HomePage

