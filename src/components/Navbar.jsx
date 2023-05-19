import React from 'react'
import '../App.css'
import Search from '../img/search.png'
import User from '../img/user.png'
import Cart from '../img/shopping-cart.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="header-wrapper">
			<div className="menu">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="#">Blog</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
			<motion.div whileFocus={{scale: 1.5}} whileTap={{scale:0.6}} className="logo">
				<Link to ="/" ><span className="logo-text">Beautify</span></Link>
			</motion.div>
			<div className="icons">
				<Link to=" "><motion.img whileTap={{scale: 0.6}} src={Search} /></Link>				
				<Link to="/login"><motion.img whileTap={{scale: 0.6}} src={User} /></Link>				
				<Link  to="/cart "><motion.img whileTap={{scale: 0.6}} src={Cart} /><motion.span whileTap={{scale:0.6}}>0</motion.span></Link>				
			</div>			
		</div>
  )
}

export default Navbar