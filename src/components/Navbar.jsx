import React, {useState} from 'react'
import '../App.css'
import Search from '../img/search.png'
import User from '../img/user.png'
import Cart from '../img/shopping-cart.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SearchBox from './SearchBox'

const Navbar = ({ count }) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const handleSearchClick = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	return (
		<div className="header-wrapper">
			<div className="menu">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="#">Blog</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
			<motion.div whileFocus={{ scale: 1.5 }} whileTap={{ scale: 0.6 }} className="logo">
				<Link to="/" ><span className="logo-text">Beautify</span></Link>
			</motion.div>
			<div className="icons">
				<Link to=" " onClick={handleSearchClick}><motion.img whileTap={{ scale: 0.6 }} src={Search} onClick={handleSearchClick}/></Link>
				<Link to="/login"><motion.img whileTap={{ scale: 0.6 }} src={User} /></Link>
				<Link to="/cart "><motion.img whileTap={{ scale: 0.6 }} src={Cart} /><motion.span whileTap={{ scale: 0.6 }}></motion.span></Link>
				{isSearchOpen && (<SearchBox />)}
			</div>
			
		</div>
	)
}

export default Navbar