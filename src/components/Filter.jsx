import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";


const Filter = ({filter}) => {
  return (
    <div className='filter'>
        <p className='filter-name'>{filter}</p>
        <IoMdArrowDropdown className='filter-type-selection-icon'/>

    </div>
  )
}

export default Filter