import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='flex justify-between align-center py-6 px-16'>
            <li><button>NEW IN</button></li>
            <li><button>COMING SOON</button></li>
            <li><button>GIRLS</button></li>
            <li><button>BOYS</button></li>
            <li><button>BABY</button></li>
            <li> <a href="#product-listings" className='shop-btn border-2 p-1'>SHOP NOW</a></li>

        </ul>
    </div>
  )
}

export default Navbar