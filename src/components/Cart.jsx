import React, { useState } from 'react'
import '../App.css'
import CartItem from './CartItem'
import Navbar from './Navbar'
import { items } from './Items'
import Footer from './Footer'
import { motion } from 'framer-motion'
import TotalPrice from './TotalPrice'

const Cart = ({cart}) => {
	// const [item, setItem] = useState([]);
	return (
		<div >
			<Navbar />
			<div className="product-container">
				<div className="product-header">
					<h5 className="product-title">PRODUCT</h5>
					<h5 className="price">PRICE</h5>
					<h5 className="quantity">QUANTITY</h5>
					<h5 className="total">TOTAL</h5>
				</div>
				<div className="products">
					{cart.map((curItem) => {
						return <CartItem key={curItem.id} {...curItem}  />
					})}
				</div>
				<TotalPrice />	
				
				<motion.button whileTap={{ scale: 0.75 }} className="proceed" >Proceed To Checkout</motion.button>
			</div>
			<Footer />
		</div>
	)
}

export default Cart