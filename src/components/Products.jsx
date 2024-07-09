import React, { useState, useEffect } from 'react';
import Product from './Product';

// Dynamically import all images from the products directory
const images = import.meta.glob('../assets/images/products/*.{png,jpg,jpeg,svg}');

const products = [
  { id: 1, name: 'BLUE DOLL', subName: 'Cut-out lacey dress', price: "25.00", filename: 'product1' },
  { id: 2, name: 'TEA BABY BAY', subName: 'Cut-out lacey dress', price: "25.00", filename: 'product2' },
  { id: 3, name: 'MARIGOLD DOT', subName: 'Cut-out lacey dress', price: "25.00", filename: 'product3' },
  { id: 4, name: 'HILL COURT', subName: 'Pink flower dress', price: "25.00", filename: 'product4' },
  { id: 5, name: 'DOLVY BAY', subName: 'Orange layered dress', price: "15.00", filename: 'product5' },
  { id: 6, name: 'MARIGOLD BAY', subName: 'Yellow layered dress', price: "35.00", filename: 'product6' },
  { id: 7, name: 'FLORAL ROOST', subName: 'Orange black dress', price: "25.00", filename: 'product7' },
  { id: 8, name: 'BLUE DAISY', subName: 'Blue green floral dress', price: "15.00", filename: 'product8' },
  { id: 9, name: 'SUMMER DANCE', subName: 'Orange pink floral dress', price: "35.00", filename: 'product9' },
  { id: 10, name: 'SUNSHINE DAISY', subName: 'Orange black dress', price: "25.00", filename: 'product10' },
  { id: 11, name: 'POWDER BLUE', subName: 'Blue green floral dress', price: "15.00", filename: 'product11' },
  { id: 12, name: 'QUINNEA', subName: 'Yellow patch floral dress', price: "35.00", filename: 'product12' }
];

const Products = () => {
  const [imageMap, setImageMap] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const newImageMap = {};
      for (const path in images) {
        const mod = await images[path]();
        const key = path.split('/').pop().split('.')[0]; // Extract the filename without extension
        newImageMap[key] = mod.default;
      }
      setImageMap(newImageMap);
    };

    loadImages();
  }, []);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} imageUrl={imageMap[product.filename]} />
      ))}
    </div>
  );
};

export default Products;
