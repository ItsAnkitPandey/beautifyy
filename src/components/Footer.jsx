import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-wrapper">
				<footer>
					<div className="col-50">
						<span className="logo-text">Beautify</span>
						<p className="sub-text">Give your customers insight into your product collection.</p>						
					</div>
					<div className="col-25">
						<h3>Quick Links</h3>
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to=" ">Blog</Link></li>
							<li><Link to="/contact">Contact Us</Link></li>
						</ul>
						
					</div>
					<div className="col-25">
						<h3>About</h3>
						<ul>
							<li><Link to="">Shiping</Link></li>
							<li><Link to="">Terms & Conditions</Link></li>
							<li><Link to="">Privacy Policy</Link></li>
						</ul>
					</div>
					<hr />
					<div className="footer-end">
						<p>Ankit Pandey</p>						
					</div>
				</footer>
				
			</div>
  )
}

export default Footer