import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';


const Products = ({id, img, name, price, addToCart, curItem}) => {
  return (
    
         <figure>
             <motion.img whileTap={{scale:0.6 }} src={img} alt="products"/>
             <figcaption>{name} </figcaption>
             <p>${price}</p>
             <button className="add-cart" onClick={() => {addToCart(curItem)}}>Add to cart</button>
             <button className="know-more-button">Know More</button>
         </figure>
     
  )
}

export default Products
