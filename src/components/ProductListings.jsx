import React from 'react'
import Filters from './Filters'
import Products from './Products'

const ProductListings = () => {
  return (
    <div className='product-listings' id='product-listings'>
        <Filters />
        <Products />
    </div>
  )
}

export default ProductListings