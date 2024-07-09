import React from 'react'
import Filter from './Filter'

const Filters = () => {
  return (
    <div className='filters-container'>
        <Filter filter="Sort by" />
        <Filter filter="Category"/>
        <Filter filter="Product Type" />
        <Filter filter="Occasion" />
        <Filter filter="Gender" />
        <Filter filter="Brand" />
        <Filter filter="Color" />
        <Filter filter="Sleeve length" />
        <Filter filter="Price" />
    </div>
  )
}

export default Filters