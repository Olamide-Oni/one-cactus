import React from 'react';
import hero from '../assets/images/hero-image.jpg';

const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${hero})`,
        height : '414px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  return (
    <div className='Hero-section ' style={heroStyle}>
            
            
    </div>
  )
}

export default Hero