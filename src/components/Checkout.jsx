import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Checkout = ({ cart }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your order has been successfully placed and CASH ON DELIVERY applied to your order.")
        console.log(formData);
        navigate("/")
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.inCart, 0);

    return (
        <>
            <div className="checkout-container">
                <div className="cart-items">
                    <h2>Cart Items:</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} :- ({item.inCart}) - ${item.price * item.inCart}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleSubmit} className='checkout-form'>
                    <div className='form-details'>
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="postalCode">Postal Code:</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <motion.button whileTap={{ scale: 0.75 }} type="submit">Place Order</motion.button>
                </form>
                {/* End of Checkout Form */}
            </div>
            <Link className='b-cart' to="/cart">
                <motion.button whileTap={{ scale: 0.75 }} className='b-cart'>Back to Cart</motion.button>
            </Link>
        </>
    );
};

export default Checkout;
