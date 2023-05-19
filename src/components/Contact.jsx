import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../App.css'

const Contact = () => {
  return (
    <div className='container'>
    <Navbar />
    <div className="contact">
            <form action="#" method="POST" id="contact_form">
                <h3>Contact Us! </h3>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" placeholder="Email Id" name="email" required />
                <input type="text" name="phone" placeholder="Phone no." required />
                <textarea placeholder="Type Your Message" name="message" rows="4"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        <Footer />
      
    </div>
  )
}

export default Contact
